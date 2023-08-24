import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AnswerModuleBase } from "./base/answer.module.base";
import { AnswerService } from "./answer.service";
import { AnswerController } from "./answer.controller";

@Module({
  imports: [AnswerModuleBase, forwardRef(() => AuthModule)],
  controllers: [AnswerController],
  providers: [AnswerService],
  exports: [AnswerService],
})
export class AnswerModule {}
