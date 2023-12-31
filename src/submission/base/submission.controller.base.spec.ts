import { CallHandler, ExecutionContext, HttpStatus, INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { ACGuard } from 'nest-access-control';
import { MorganModule } from 'nest-morgan';
import { map } from 'rxjs';
import request from 'supertest';
import { ACLModule } from '../../auth/acl.module';
import { DefaultAuthGuard } from '../../auth/defaultAuth.guard';
import { AclFilterResponseInterceptor } from '../../interceptors/aclFilterResponse.interceptor';
import { AclValidateRequestInterceptor } from '../../interceptors/aclValidateRequest.interceptor';
import { SubmissionController } from '../submission.controller';
import { SubmissionService } from '../submission.service';

const nonExistingId = 'nonExistingId';
const existingId = 'existingId';
const CREATE_INPUT = {
  createdAt: new Date(),
  id: 'exampleId',
};
const CREATE_RESULT = {
  createdAt: new Date(),
  id: 'exampleId',
};
const FIND_MANY_RESULT = [
  {
    createdAt: new Date(),
    id: 'exampleId',
  },
];
const FIND_ONE_RESULT = {
  createdAt: new Date(),
  id: 'exampleId',
};

const service = {
  create() {
    return CREATE_RESULT;
  },
  findMany: () => FIND_MANY_RESULT,
  findOne: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ['user'],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe('Submission', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: SubmissionService,
          useValue: service,
        },
      ],
      controllers: [SubmissionController],
      imports: [MorganModule.forRoot(), ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test('POST /submissions', async () => {
    await request(app.getHttpServer())
      .post('/submissions')
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
      });
  });

  test('GET /submissions', async () => {
    await request(app.getHttpServer())
      .get('/submissions')
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
        },
      ]);
  });

  test('GET /submissions/:id non existing', async () => {
    await request(app.getHttpServer())
      .get(`${'/submissions'}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${'id'}":"${nonExistingId}"}`,
        error: 'Not Found',
      });
  });

  test('GET /submissions/:id existing', async () => {
    await request(app.getHttpServer())
      .get(`${'/submissions'}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
      });
  });

  test('POST /submissions existing resource', async () => {
    let agent = request(app.getHttpServer());
    await agent
      .post('/submissions')
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
      })
      .then(function () {
        agent.post('/submissions').send(CREATE_INPUT).expect(HttpStatus.CONFLICT).expect({
          statusCode: HttpStatus.CONFLICT,
        });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
