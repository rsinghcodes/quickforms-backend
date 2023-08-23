import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { QuestionUpdateInput } from './QuestionUpdateInput';
import { QuestionWhereUniqueInput } from './QuestionWhereUniqueInput';

class UpdateQuestionArgs {
  @ApiProperty({
    required: true,
    type: () => QuestionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => QuestionWhereUniqueInput)
  where!: QuestionWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => QuestionUpdateInput,
  })
  @ValidateNested()
  @Type(() => QuestionUpdateInput)
  data!: QuestionUpdateInput;
}

export { UpdateQuestionArgs as UpdateQuestionArgs };
