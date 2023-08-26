import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsString, ValidateNested } from 'class-validator';
import { QuestionWhereUniqueInput } from '../../question/base/QuestionWhereUniqueInput';
import { SubmissionWhereUniqueInput } from '../../submission/base/SubmissionWhereUniqueInput';

class AnswerCreateInput {
  @ApiProperty({
    required: true,
    type: () => QuestionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => QuestionWhereUniqueInput)
  question!: QuestionWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => SubmissionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SubmissionWhereUniqueInput)
  submission!: SubmissionWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  value!: string;
}

export { AnswerCreateInput as AnswerCreateInput };
