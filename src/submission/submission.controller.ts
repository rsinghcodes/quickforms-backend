import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SubmissionService } from "./submission.service";
import { SubmissionControllerBase } from "./base/submission.controller.base";

@swagger.ApiTags("submissions")
@common.Controller("submissions")
export class SubmissionController extends SubmissionControllerBase {
  constructor(
    protected readonly service: SubmissionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
