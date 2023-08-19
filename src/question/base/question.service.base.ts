import { Answer, Form, Prisma, Question } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';

export class QuestionServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.QuestionCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.QuestionCountArgs>
  ): Promise<number> {
    return this.prisma.question.count(args);
  }

  async findMany<T extends Prisma.QuestionFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.QuestionFindManyArgs>
  ): Promise<Question[]> {
    return this.prisma.question.findMany(args);
  }
  async findOne<T extends Prisma.QuestionFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.QuestionFindUniqueArgs>
  ): Promise<Question | null> {
    return this.prisma.question.findUnique(args);
  }
  async create<T extends Prisma.QuestionCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.QuestionCreateArgs>
  ): Promise<Question> {
    return this.prisma.question.create<T>(args);
  }
  async update<T extends Prisma.QuestionUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.QuestionUpdateArgs>
  ): Promise<Question> {
    return this.prisma.question.update<T>(args);
  }
  async delete<T extends Prisma.QuestionDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.QuestionDeleteArgs>
  ): Promise<Question> {
    return this.prisma.question.delete(args);
  }

  async findAnswers(parentId: string, args: Prisma.AnswerFindManyArgs): Promise<Answer[]> {
    return this.prisma.question
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .answers(args);
  }

  async getForm(parentId: string): Promise<Form | null> {
    return this.prisma.question
      .findUnique({
        where: { id: parentId },
      })
      .form();
  }
}
