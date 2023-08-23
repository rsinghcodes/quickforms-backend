import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { QuestionWhereInput } from './QuestionWhereInput';

class QuestionCountArgs {
  @ApiProperty({
    required: false,
    type: () => QuestionWhereInput,
  })
  @Type(() => QuestionWhereInput)
  where?: QuestionWhereInput;
}

export { QuestionCountArgs as QuestionCountArgs };
