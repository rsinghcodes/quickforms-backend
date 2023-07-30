import { Module } from "@nestjs/common";
import { FormModuleBase } from "./base/form.module.base";
import { FormService } from "./form.service";
import { FormController } from "./form.controller";

@Module({
  imports: [FormModuleBase],
  controllers: [FormController],
  providers: [FormService],
  exports: [FormService],
})
export class FormModule {}
