import { Form, Prisma, Question, Submission } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';

export class FormServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.FormCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.FormCountArgs>
  ): Promise<number> {
    return this.prisma.form.count(args);
  }

  async findMany<T extends Prisma.FormFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.FormFindManyArgs>
  ): Promise<Form[]> {
    return this.prisma.form.findMany(args);
  }
  async findOne<T extends Prisma.FormFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.FormFindUniqueArgs>
  ): Promise<Form | null> {
    return this.prisma.form.findUnique(args);
  }
  async create<T extends Prisma.FormCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.FormCreateArgs>
  ): Promise<Form> {
    return this.prisma.form.create<T>(args);
  }
  async update<T extends Prisma.FormUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.FormUpdateArgs>
  ): Promise<Form> {
    return this.prisma.form.update<T>(args);
  }
  async delete<T extends Prisma.FormDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.FormDeleteArgs>
  ): Promise<Form> {
    return this.prisma.form.delete(args);
  }

  async findQuestions(parentId: string, args: Prisma.QuestionFindManyArgs): Promise<Question[]> {
    return this.prisma.form
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .questions(args);
  }

  async findSubmissions(
    parentId: string,
    args: Prisma.SubmissionFindManyArgs
  ): Promise<Submission[]> {
    return this.prisma.form
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .submissions(args);
  }
}
