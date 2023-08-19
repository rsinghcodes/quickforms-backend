import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AnswerServiceBase } from "./base/answer.service.base";

@Injectable()
export class AnswerService extends AnswerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
