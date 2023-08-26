import * as common from '@nestjs/common';
import * as swagger from '@nestjs/swagger';
import { plainToClass } from 'class-transformer';
import { Request } from 'express';
import * as nestAccessControl from 'nest-access-control';
import * as defaultAuthGuard from '../../auth/defaultAuth.guard';
import { ApiNestedQuery } from '../../decorators/api-nested-query.decorator';
import * as errors from '../../errors';
import { AclFilterResponseInterceptor } from '../../interceptors/aclFilterResponse.interceptor';
import { AclValidateRequestInterceptor } from '../../interceptors/aclValidateRequest.interceptor';
import { isRecordNotFoundError } from '../../prisma.util';
import { AnswerService } from '../answer.service';
import { Answer } from './Answer';
import { AnswerCreateInput } from './AnswerCreateInput';
import { AnswerFindManyArgs } from './AnswerFindManyArgs';
import { AnswerUpdateInput } from './AnswerUpdateInput';
import { AnswerWhereUniqueInput } from './AnswerWhereUniqueInput';

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class AnswerControllerBase {
  constructor(
    protected readonly service: AnswerService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Answer })
  @nestAccessControl.UseRoles({
    resource: 'Answer',
    action: 'create',
    possession: 'any',
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: AnswerCreateInput): Promise<Answer> {
    return await this.service.create({
      data: {
        ...data,

        question: {
          connect: data.question,
        },

        submission: {
          connect: data.submission,
        },
      },
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Answer] })
  @ApiNestedQuery(AnswerFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: 'Answer',
    action: 'read',
    possession: 'any',
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Answer[]> {
    const args = plainToClass(AnswerFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get('/:id')
  @swagger.ApiOkResponse({ type: Answer })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: 'Answer',
    action: 'read',
    possession: 'own',
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(@common.Param() params: AnswerWhereUniqueInput): Promise<Answer | null> {
    const result = await this.service.findOne({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(`No resource was found for ${JSON.stringify(params)}`);
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch('/:id')
  @swagger.ApiOkResponse({ type: Answer })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: 'Answer',
    action: 'update',
    possession: 'any',
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: AnswerWhereUniqueInput,
    @common.Body() data: AnswerUpdateInput
  ): Promise<Answer | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          question: {
            connect: data.question,
          },

          submission: {
            connect: data.submission,
          },
        },
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
    } catch (error: any) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(`No resource was found for ${JSON.stringify(params)}`);
      }
      throw error;
    }
  }

  @common.Delete('/:id')
  @swagger.ApiOkResponse({ type: Answer })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: 'Answer',
    action: 'delete',
    possession: 'any',
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(@common.Param() params: AnswerWhereUniqueInput): Promise<Answer | null> {
    try {
      return await this.service.delete({
        where: params,
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
    } catch (error: any) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(`No resource was found for ${JSON.stringify(params)}`);
      }
      throw error;
    }
  }
}
