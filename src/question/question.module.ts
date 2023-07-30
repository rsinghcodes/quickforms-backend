import { Module } from "@nestjs/common";
import { QuestionModuleBase } from "./base/question.module.base";
import { QuestionService } from "./question.service";
import { QuestionController } from "./question.controller";

@Module({
  imports: [QuestionModuleBase],
  controllers: [QuestionController],
  providers: [QuestionService],
  exports: [QuestionService],
})
export class QuestionModule {}
