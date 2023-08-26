import { Module } from '@nestjs/common';
import { MorganModule } from 'nest-morgan';
import { ACLModule } from '../../auth/acl.module';
@Module({
  imports: [ACLModule, MorganModule],
  exports: [ACLModule, MorganModule],
})
export class QuestionModuleBase {}
