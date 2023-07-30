import { Module } from "@nestjs/common";
import { AnswerModuleBase } from "./base/answer.module.base";
import { AnswerService } from "./answer.service";
import { AnswerController } from "./answer.controller";

@Module({
  imports: [AnswerModuleBase],
  controllers: [AnswerController],
  providers: [AnswerService],
  exports: [AnswerService],
})
export class AnswerModule {}
