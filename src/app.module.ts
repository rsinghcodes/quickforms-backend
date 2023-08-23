import { Module, Scope } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ServeStaticModule } from '@nestjs/serve-static';
import { MorganInterceptor, MorganModule } from 'nest-morgan';
import { AnswerModule } from './answer/answer.module';
import { FormModule } from './form/form.module';
import { HealthModule } from './health/health.module';
import { PrismaModule } from './prisma/prisma.module';
import { SecretsManagerModule } from './providers/secrets/secretsManager.module';
import { QuestionModule } from './question/question.module';
import { ServeStaticOptionsService } from './serveStaticOptions.service';
import { SubmissionModule } from './submission/submission.module';
import { UserModule } from './user/user.module';

import { ACLModule } from './auth/acl.module';
import { AuthModule } from './auth/auth.module';

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
    UserModule,
    FormModule,
    QuestionModule,
    SubmissionModule,
    AnswerModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    MorganModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      scope: Scope.REQUEST,
      useClass: MorganInterceptor('combined'),
    },
  ],
})
export class AppModule {}
