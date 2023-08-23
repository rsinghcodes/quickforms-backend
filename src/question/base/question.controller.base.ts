import * as common from '@nestjs/common';
import * as swagger from '@nestjs/swagger';
import { plainToClass } from 'class-transformer';
import { Request } from 'express';
import * as nestAccessControl from 'nest-access-control';
import { Answer } from '../../answer/base/Answer';
import { AnswerFindManyArgs } from '../../answer/base/AnswerFindManyArgs';
import { AnswerWhereUniqueInput } from '../../answer/base/AnswerWhereUniqueInput';
import * as defaultAuthGuard from '../../auth/defaultAuth.guard';
import { ApiNestedQuery } from '../../decorators/api-nested-query.decorator';
import { Public } from '../../decorators/public.decorator';
import * as errors from '../../errors';
import { AclFilterResponseInterceptor } from '../../interceptors/aclFilterResponse.interceptor';
import { AclValidateRequestInterceptor } from '../../interceptors/aclValidateRequest.interceptor';
import { isRecordNotFoundError } from '../../prisma.util';
import { QuestionService } from '../question.service';
import { Question } from './Question';
import { QuestionCreateInput } from './QuestionCreateInput';
import { QuestionFindManyArgs } from './QuestionFindManyArgs';
import { QuestionUpdateInput } from './QuestionUpdateInput';
import { QuestionWhereUniqueInput } from './QuestionWhereUniqueInput';

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class QuestionControllerBase {
  constructor(
    protected readonly service: QuestionService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Question })
  @nestAccessControl.UseRoles({
    resource: 'Question',
    action: 'create',
    possession: 'any',
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: QuestionCreateInput): Promise<Question> {
    return await this.service.create({
      data: {
        ...data,

        form: {
          connect: data.form,
        },
      },
      select: {
        dropdownOptions: true,

        form: {
          select: {
            id: true,
          },
        },

        id: true,
        label: true,
        options: true,
        questionType: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Question] })
  @ApiNestedQuery(QuestionFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: 'Question',
    action: 'read',
    possession: 'any',
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Question[]> {
    const args = plainToClass(QuestionFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        dropdownOptions: true,

        form: {
          select: {
            id: true,
          },
        },

        id: true,
        label: true,
        options: true,
        questionType: true,
      },
    });
  }

  @Public()
  @common.Get('/:id')
  @swagger.ApiOkResponse({ type: Question })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(@common.Param() params: QuestionWhereUniqueInput): Promise<Question | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        dropdownOptions: true,

        form: {
          select: {
            id: true,
          },
        },

        id: true,
        label: true,
        options: true,
        questionType: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(`No resource was found for ${JSON.stringify(params)}`);
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch('/:id')
  @swagger.ApiOkResponse({ type: Question })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: 'Question',
    action: 'update',
    possession: 'any',
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: QuestionWhereUniqueInput,
    @common.Body() data: QuestionUpdateInput
  ): Promise<Question | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          form: {
            connect: data.form,
          },
        },
        select: {
          dropdownOptions: true,

          form: {
            select: {
              id: true,
            },
          },

          id: true,
          label: true,
          options: true,
          questionType: true,
        },
      });
    } catch (error: any) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(`No resource was found for ${JSON.stringify(params)}`);
      }
      throw error;
    }
  }

  @common.Delete('/:id')
  @swagger.ApiOkResponse({ type: Question })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: 'Question',
    action: 'delete',
    possession: 'any',
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(@common.Param() params: QuestionWhereUniqueInput): Promise<Question | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          dropdownOptions: true,

          form: {
            select: {
              id: true,
            },
          },

          id: true,
          label: true,
          options: true,
          questionType: true,
        },
      });
    } catch (error: any) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(`No resource was found for ${JSON.stringify(params)}`);
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get('/:id/answers')
  @ApiNestedQuery(AnswerFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: 'Answer',
    action: 'read',
    possession: 'any',
  })
  async findManyAnswers(
    @common.Req() request: Request,
    @common.Param() params: QuestionWhereUniqueInput
  ): Promise<Answer[]> {
    const query = plainToClass(AnswerFindManyArgs, request.query);
    const results = await this.service.findAnswers(params.id, {
      ...query,
      select: {
        id: true,

        question: {
          select: {
            id: true,
          },
        },

        submission: {
          select: {
            id: true,
          },
        },

        value: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(`No resource was found for ${JSON.stringify(params)}`);
    }
    return results;
  }

  @common.Post('/:id/answers')
  @nestAccessControl.UseRoles({
    resource: 'Question',
    action: 'update',
    possession: 'any',
  })
  async connectAnswers(
    @common.Param() params: QuestionWhereUniqueInput,
    @common.Body() body: AnswerWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      answers: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch('/:id/answers')
  @nestAccessControl.UseRoles({
    resource: 'Question',
    action: 'update',
    possession: 'any',
  })
  async updateAnswers(
    @common.Param() params: QuestionWhereUniqueInput,
    @common.Body() body: AnswerWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      answers: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete('/:id/answers')
  @nestAccessControl.UseRoles({
    resource: 'Question',
    action: 'update',
    possession: 'any',
  })
  async disconnectAnswers(
    @common.Param() params: QuestionWhereUniqueInput,
    @common.Body() body: AnswerWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      answers: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
