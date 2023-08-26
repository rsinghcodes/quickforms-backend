import * as common from '@nestjs/common';
import * as swagger from '@nestjs/swagger';
import { plainToClass } from 'class-transformer';
import { Request } from 'express';
import * as nestAccessControl from 'nest-access-control';
import * as defaultAuthGuard from '../../auth/defaultAuth.guard';
import { ApiNestedQuery } from '../../decorators/api-nested-query.decorator';
import * as errors from '../../errors';
import { Form } from '../../form/base/Form';
import { FormFindManyArgs } from '../../form/base/FormFindManyArgs';
import { FormWhereUniqueInput } from '../../form/base/FormWhereUniqueInput';
import { AclFilterResponseInterceptor } from '../../interceptors/aclFilterResponse.interceptor';
import { AclValidateRequestInterceptor } from '../../interceptors/aclValidateRequest.interceptor';
import { isRecordNotFoundError } from '../../prisma.util';
import { Submission } from '../../submission/base/Submission';
import { SubmissionFindManyArgs } from '../../submission/base/SubmissionFindManyArgs';
import { SubmissionWhereUniqueInput } from '../../submission/base/SubmissionWhereUniqueInput';
import { UserService } from '../user.service';
import { User } from './User';
import { UserCreateInput } from './UserCreateInput';
import { UserFindManyArgs } from './UserFindManyArgs';
import { UserUpdateInput } from './UserUpdateInput';
import { UserWhereUniqueInput } from './UserWhereUniqueInput';

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class UserControllerBase {
  constructor(
    protected readonly service: UserService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: User })
  @nestAccessControl.UseRoles({
    resource: 'User',
    action: 'create',
    possession: 'any',
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: UserCreateInput): Promise<User> {
    return await this.service.create({
      data: data,
      select: {
        createdAt: true,
        firstName: true,
        id: true,
        lastName: true,
        roles: true,
        updatedAt: true,
        username: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [User] })
  @ApiNestedQuery(UserFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: 'User',
    action: 'read',
    possession: 'any',
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<User[]> {
    const args = plainToClass(UserFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        firstName: true,
        id: true,
        lastName: true,
        roles: true,
        updatedAt: true,
        username: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get('/:id')
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: 'User',
    action: 'read',
    possession: 'own',
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(@common.Param() params: UserWhereUniqueInput): Promise<User | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        firstName: true,
        id: true,
        lastName: true,
        roles: true,
        updatedAt: true,
        username: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(`No resource was found for ${JSON.stringify(params)}`);
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch('/:id')
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: 'User',
    action: 'update',
    possession: 'any',
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() data: UserUpdateInput
  ): Promise<User | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          createdAt: true,
          firstName: true,
          id: true,
          lastName: true,
          roles: true,
          updatedAt: true,
          username: true,
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
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: 'User',
    action: 'delete',
    possession: 'any',
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(@common.Param() params: UserWhereUniqueInput): Promise<User | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          firstName: true,
          id: true,
          lastName: true,
          roles: true,
          updatedAt: true,
          username: true,
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
  @common.Get('/:id/forms')
  @ApiNestedQuery(FormFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: 'Form',
    action: 'read',
    possession: 'any',
  })
  async findManyForms(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<Form[]> {
    const query = plainToClass(FormFindManyArgs, request.query);
    const results = await this.service.findForms(params.id, {
      ...query,
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
    if (results === null) {
      throw new errors.NotFoundException(`No resource was found for ${JSON.stringify(params)}`);
    }
    return results;
  }

  @common.Post('/:id/forms')
  @nestAccessControl.UseRoles({
    resource: 'User',
    action: 'update',
    possession: 'any',
  })
  async connectForms(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: FormWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      forms: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch('/:id/forms')
  @nestAccessControl.UseRoles({
    resource: 'User',
    action: 'update',
    possession: 'any',
  })
  async updateForms(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: FormWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      forms: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete('/:id/forms')
  @nestAccessControl.UseRoles({
    resource: 'User',
    action: 'update',
    possession: 'any',
  })
  async disconnectForms(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: FormWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      forms: {
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
    @common.Param() params: UserWhereUniqueInput
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
            title: true,
            description: true,
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
    resource: 'User',
    action: 'update',
    possession: 'any',
  })
  async connectSubmissions(
    @common.Param() params: UserWhereUniqueInput,
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
    resource: 'User',
    action: 'update',
    possession: 'any',
  })
  async updateSubmissions(
    @common.Param() params: UserWhereUniqueInput,
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
    resource: 'User',
    action: 'update',
    possession: 'any',
  })
  async disconnectSubmissions(
    @common.Param() params: UserWhereUniqueInput,
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
