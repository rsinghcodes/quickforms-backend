import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { AnswerUpdateInput } from './AnswerUpdateInput';
import { AnswerWhereUniqueInput } from './AnswerWhereUniqueInput';

class UpdateAnswerArgs {
  @ApiProperty({
    required: true,
    type: () => AnswerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AnswerWhereUniqueInput)
  where!: AnswerWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => AnswerUpdateInput,
  })
  @ValidateNested()
  @Type(() => AnswerUpdateInput)
  data!: AnswerUpdateInput;
}

export { UpdateAnswerArgs as UpdateAnswerArgs };
