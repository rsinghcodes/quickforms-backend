import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SubmissionServiceBase } from "./base/submission.service.base";

@Injectable()
export class SubmissionService extends SubmissionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
