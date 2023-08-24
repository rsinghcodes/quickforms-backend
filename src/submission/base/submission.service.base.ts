import { Answer, Form, Prisma, Submission, User } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';

export class SubmissionServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.SubmissionCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.SubmissionCountArgs>
  ): Promise<number> {
    return this.prisma.submission.count(args);
  }

  async findMany<T extends Prisma.SubmissionFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SubmissionFindManyArgs>
  ): Promise<Submission[]> {
    return this.prisma.submission.findMany(args);
  }
  async findOne<T extends Prisma.SubmissionFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.SubmissionFindUniqueArgs>
  ): Promise<Submission | null> {
    return this.prisma.submission.findUnique(args);
  }
  async create<T extends Prisma.SubmissionCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SubmissionCreateArgs>
  ): Promise<Submission> {
    return this.prisma.submission.create<T>(args);
  }
  async update<T extends Prisma.SubmissionUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SubmissionUpdateArgs>
  ): Promise<Submission> {
    return this.prisma.submission.update<T>(args);
  }
  async delete<T extends Prisma.SubmissionDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.SubmissionDeleteArgs>
  ): Promise<Submission> {
    return this.prisma.submission.delete(args);
  }

  async findAnswers(parentId: string, args: Prisma.AnswerFindManyArgs): Promise<Answer[]> {
    return this.prisma.submission
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .answers(args);
  }

  async getCreatedBy(parentId: string): Promise<User | null> {
    return this.prisma.submission
      .findUnique({
        where: { id: parentId },
      })
      .createdBy();
  }

  async getForm(parentId: string): Promise<Form | null> {
    return this.prisma.submission
      .findUnique({
        where: { id: parentId },
      })
      .form();
  }
}
