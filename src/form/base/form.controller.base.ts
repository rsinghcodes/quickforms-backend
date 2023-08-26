import * as common from '@nestjs/common';
import * as swagger from '@nestjs/swagger';
import { plainToClass } from 'class-transformer';
import { Request } from 'express';
import * as nestAccessControl from 'nest-access-control';
import * as defaultAuthGuard from '../../auth/defaultAuth.guard';
import { ApiNestedQuery } from '../../decorators/api-nested-query.decorator';
import { Public } from '../../decorators/public.decorator';
import * as errors from '../../errors';
import { AclFilterResponseInterceptor } from '../../interceptors/aclFilterResponse.interceptor';
import { AclValidateRequestInterceptor } from '../../interceptors/aclValidateRequest.interceptor';
import { isRecordNotFoundError } from '../../prisma.util';
import { Question } from '../../question/base/Question';
import { QuestionFindManyArgs } from '../../question/base/QuestionFindManyArgs';
import { QuestionWhereUniqueInput } from '../../question/base/QuestionWhereUniqueInput';
import { Submission } from '../../submission/base/Submission';
import { SubmissionFindManyArgs } from '../../submission/base/SubmissionFindManyArgs';
import { SubmissionWhereUniqueInput } from '../../submission/base/SubmissionWhereUniqueInput';
import { FormService } from '../form.service';
import { Form } from './Form';
import { FormCreateInput } from './FormCreateInput';
import { FormFindManyArgs } from './FormFindManyArgs';
import { FormUpdateInput } from './FormUpdateInput';
import { FormWhereUniqueInput } from './FormWhereUniqueInput';

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class FormControllerBase {
  constructor(
    protected readonly service: FormService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Form })
  @nestAccessControl.UseRoles({
    resource: 'Form',
    action: 'create',
    possession: 'any',
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: FormCreateInput): Promise<Form> {
    return await this.service.create({
      data: {
        ...data,

        createdBy: {
          connect: data.createdBy,
        },
      },
      select: {
        createdAt: true,

        createdBy: {
          select: {
            id: true,
          },
        },

        description: true,
        id: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Form] })
  @ApiNestedQuery(FormFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: 'Form',
    action: 'read',
    possession: 'any',
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Form[]> {
    const args = plainToClass(FormFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,

        createdBy: {
          select: {
            id: true,
          },
        },

        description: true,
        id: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @Public()
  @common.Get('/:id')
  @swagger.ApiOkResponse({ type: Form })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(@common.Param() params: FormWhereUniqueInput): Promise<Form | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,

        createdBy: {
          select: {
            id: true,
          },
        },

        questions: true,
        description: true,
        id: true,
        title: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(`No resource was found for ${JSON.stringify(params)}`);
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch('/:id')
  @swagger.ApiOkResponse({ type: Form })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: 'Form',
    action: 'update',
    possession: 'any',
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: FormWhereUniqueInput,
    @common.Body() data: FormUpdateInput
  ): Promise<Form | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          createdBy: {
            connect: data.createdBy,
          },
        },
        select: {
          createdAt: true,

          createdBy: {
            select: {
              id: true,
            },
          },

          description: true,
          id: true,
          title: true,
          updatedAt: true,
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
  @swagger.ApiOkResponse({ type: Form })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: 'Form',
    action: 'delete',
    possession: 'any',
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(@common.Param() params: FormWhereUniqueInput): Promise<Form | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,

          createdBy: {
            select: {
              id: true,
            },
          },

          description: true,
          id: true,
          title: true,
          updatedAt: true,
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
  @common.Get('/:id/questions')
  @ApiNestedQuery(QuestionFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: 'Question',
    action: 'read',
    possession: 'any',
  })
  async findManyQuestions(
    @common.Req() request: Request,
    @common.Param() params: FormWhereUniqueInput
  ): Promise<Question[]> {
    const query = plainToClass(QuestionFindManyArgs, request.query);
    const results = await this.service.findQuestions(params.id, {
      ...query,
      select: {
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
    if (results === null) {
      throw new errors.NotFoundException(`No resource was found for ${JSON.stringify(params)}`);
    }
    return results;
  }

  @common.Post('/:id/questions')
  @nestAccessControl.UseRoles({
    resource: 'Form',
    action: 'update',
    possession: 'any',
  })
  async connectQuestions(
    @common.Param() params: FormWhereUniqueInput,
    @common.Body() body: QuestionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      questions: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch('/:id/questions')
  @nestAccessControl.UseRoles({
    resource: 'Form',
    action: 'update',
    possession: 'any',
  })
  async updateQuestions(
    @common.Param() params: FormWhereUniqueInput,
    @common.Body() body: QuestionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      questions: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete('/:id/questions')
  @nestAccessControl.UseRoles({
    resource: 'Form',
    action: 'update',
    possession: 'any',
  })
  async disconnectQuestions(
    @common.Param() params: FormWhereUniqueInput,
    @common.Body() body: QuestionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      questions: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get('/:id/submissions')
  @ApiNestedQuery(SubmissionFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: 'Submission',
    action: 'read',
    possession: 'any',
  })
  async findManySubmissions(
    @common.Req() request: Request,
    @common.Param() params: FormWhereUniqueInput
  ): Promise<Submission[]> {
    const query = plainToClass(SubmissionFindManyArgs, request.query);
    const results = await this.service.findSubmissions(params.id, {
      ...query,
      select: {
        createdAt: true,

        createdBy: {
          select: {
            id: true,
          },
        },

        form: {
          select: {
            id: true,
          },
        },

        id: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(`No resource was found for ${JSON.stringify(params)}`);
    }
    return results;
  }

  @common.Post('/:id/submissions')
  @nestAccessControl.UseRoles({
    resource: 'Form',
    action: 'update',
    possession: 'any',
  })
  async connectSubmissions(
    @common.Param() params: FormWhereUniqueInput,
    @common.Body() body: SubmissionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      submissions: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch('/:id/submissions')
  @nestAccessControl.UseRoles({
    resource: 'Form',
    action: 'update',
    possession: 'any',
  })
  async updateSubmissions(
    @common.Param() params: FormWhereUniqueInput,
    @common.Body() body: SubmissionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      submissions: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete('/:id/submissions')
  @nestAccessControl.UseRoles({
    resource: 'Form',
    action: 'update',
    possession: 'any',
  })
  async disconnectSubmissions(
    @common.Param() params: FormWhereUniqueInput,
    @common.Body() body: SubmissionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      submissions: {
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
