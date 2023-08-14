import { Module, forwardRef } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { AnswerController } from './answer.controller';
import { AnswerService } from './answer.service';
import { AnswerModuleBase } from './base/answer.module.base';

@Module({
  imports: [AnswerModuleBase, forwardRef(() => AuthModule)],
  controllers: [AnswerController],
  providers: [AnswerService],
  exports: [AnswerService],
})
export class AnswerModule {}
