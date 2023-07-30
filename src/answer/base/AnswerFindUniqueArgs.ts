import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { AnswerWhereUniqueInput } from './AnswerWhereUniqueInput';

class AnswerFindUniqueArgs {
  @ApiProperty({
    required: true,
    type: () => AnswerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AnswerWhereUniqueInput)
  where!: AnswerWhereUniqueInput;
}

export { AnswerFindUniqueArgs as AnswerFindUniqueArgs };
