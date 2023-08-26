import * as common from '@nestjs/common';
import * as swagger from '@nestjs/swagger';
import * as nestAccessControl from 'nest-access-control';
import { FormControllerBase } from './base/form.controller.base';
import { FormService } from './form.service';

@swagger.ApiTags('forms')
@common.Controller('forms')
export class FormController extends FormControllerBase {
  constructor(
    protected readonly service: FormService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
