import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { QuestionCreateInput } from './QuestionCreateInput';

class CreateQuestionArgs {
  @ApiProperty({
    required: true,
    type: () => QuestionCreateInput,
  })
  @ValidateNested()
  @Type(() => QuestionCreateInput)
  data!: QuestionCreateInput;
}

export { CreateQuestionArgs as CreateQuestionArgs };
