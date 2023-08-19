import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { AnswerWhereInput } from './AnswerWhereInput';

class AnswerCountArgs {
  @ApiProperty({
    required: false,
    type: () => AnswerWhereInput,
  })
  @Type(() => AnswerWhereInput)
  where?: AnswerWhereInput;
}

export { AnswerCountArgs as AnswerCountArgs };
