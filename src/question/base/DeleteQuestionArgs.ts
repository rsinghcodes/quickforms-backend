import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { QuestionWhereUniqueInput } from './QuestionWhereUniqueInput';

class DeleteQuestionArgs {
  @ApiProperty({
    required: true,
    type: () => QuestionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => QuestionWhereUniqueInput)
  where!: QuestionWhereUniqueInput;
}

export { DeleteQuestionArgs as DeleteQuestionArgs };
