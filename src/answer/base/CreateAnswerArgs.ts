import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { AnswerCreateInput } from './AnswerCreateInput';

class CreateAnswerArgs {
  @ApiProperty({
    required: true,
    type: () => AnswerCreateInput,
  })
  @ValidateNested()
  @Type(() => AnswerCreateInput)
  data!: AnswerCreateInput;
}

export { CreateAnswerArgs as CreateAnswerArgs };
