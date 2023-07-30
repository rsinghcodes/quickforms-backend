import { Module } from "@nestjs/common";
import { SubmissionModuleBase } from "./base/submission.module.base";
import { SubmissionService } from "./submission.service";
import { SubmissionController } from "./submission.controller";

@Module({
  imports: [SubmissionModuleBase],
  controllers: [SubmissionController],
  providers: [SubmissionService],
  exports: [SubmissionService],
})
export class SubmissionModule {}
