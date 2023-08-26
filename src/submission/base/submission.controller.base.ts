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
import * as errors from '../../errors';
import { AclFilterResponseInterceptor } from '../../interceptors/aclFilterResponse.interceptor';
import { AclValidateRequestInterceptor } from '../../interceptors/aclValidateRequest.interceptor';
import { isRecordNotFoundError } from '../../prisma.util';
import { SubmissionService } from '../submission.service';
import { Submission } from './Submission';
import { SubmissionCreateInput } from './SubmissionCreateInput';
import { SubmissionFindManyArgs } from './SubmissionFindManyArgs';
import { SubmissionUpdateInput } from './SubmissionUpdateInput';
import { SubmissionWhereUniqueInput } from './SubmissionWhereUniqueInput';

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class SubmissionControllerBase {
  constructor(
    protected readonly service: SubmissionService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Submission })
  @nestAccessControl.UseRoles({
    resource: 'Submission',
    action: 'create',
    possession: 'any',
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: SubmissionCreateInput): Promise<Submission> {
    return await this.service.create({
      data: {
        ...data,

        createdBy: {
          connect: data.createdBy,
        },

        form: {
          connect: data.form,
        },
      },
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Submission] })
  @ApiNestedQuery(SubmissionFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: 'Submission',
    action: 'read',
    possession: 'any',
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Submission[]> {
    const args = plainToClass(SubmissionFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get('/:id')
  @swagger.ApiOkResponse({ type: Submission })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: 'Submission',
    action: 'read',
    possession: 'own',
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(@common.Param() params: SubmissionWhereUniqueInput): Promise<Submission | null> {
    const result = await this.service.findOne({
      where: params,
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

        answers: true,
        id: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(`No resource was found for ${JSON.stringify(params)}`);
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch('/:id')
  @swagger.ApiOkResponse({ type: Submission })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: 'Submission',
    action: 'update',
    possession: 'any',
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: SubmissionWhereUniqueInput,
    @common.Body() data: SubmissionUpdateInput
  ): Promise<Submission | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          createdBy: {
            connect: data.createdBy,
          },

          form: {
            connect: data.form,
          },
        },
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
    } catch (error: any) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(`No resource was found for ${JSON.stringify(params)}`);
      }
      throw error;
    }
  }

  @common.Delete('/:id')
  @swagger.ApiOkResponse({ type: Submission })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: 'Submission',
    action: 'delete',
    possession: 'any',
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(@common.Param() params: SubmissionWhereUniqueInput): Promise<Submission | null> {
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

          form: {
            select: {
              id: true,
            },
          },

          id: true,
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
    @common.Param() params: SubmissionWhereUniqueInput
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
    resource: 'Submission',
    action: 'update',
    possession: 'any',
  })
  async connectAnswers(
    @common.Param() params: SubmissionWhereUniqueInput,
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
    resource: 'Submission',
    action: 'update',
    possession: 'any',
  })
  async updateAnswers(
    @common.Param() params: SubmissionWhereUniqueInput,
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
    resource: 'Submission',
    action: 'update',
    possession: 'any',
  })
  async disconnectAnswers(
    @common.Param() params: SubmissionWhereUniqueInput,
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
