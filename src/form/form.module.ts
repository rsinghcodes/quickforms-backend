import { Module, forwardRef } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { FormModuleBase } from './base/form.module.base';
import { FormController } from './form.controller';
import { FormService } from './form.service';

@Module({
  imports: [FormModuleBase, forwardRef(() => AuthModule)],
  controllers: [FormController],
  providers: [FormService],
  exports: [FormService],
})
export class FormModule {}
