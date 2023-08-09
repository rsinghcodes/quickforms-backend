import { Module, Scope } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ServeStaticModule } from '@nestjs/serve-static';
import { MorganInterceptor, MorganModule } from 'nest-morgan';
import { HealthModule } from './health/health.module';
import { PrismaModule } from './prisma/prisma.module';
import { SecretsManagerModule } from './providers/secrets/secretsManager.module';
import { ServeStaticOptionsService } from './serveStaticOptions.service';
import { UserModule } from './user/user.module';

import { ACLModule } from './auth/acl.module';
import { AuthModule } from './auth/auth.module';

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
    UserModule,
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
