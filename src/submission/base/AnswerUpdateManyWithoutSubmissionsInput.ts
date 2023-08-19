import { ApiProperty } from '@nestjs/swagger';
import { AnswerWhereUniqueInput } from '../../answer/base/AnswerWhereUniqueInput';

class AnswerUpdateManyWithoutSubmissionsInput {
  @ApiProperty({
    required: false,
    type: () => [AnswerWhereUniqueInput],
  })
  connect?: Array<AnswerWhereUniqueInput>;

  @ApiProperty({
    required: false,
    type: () => [AnswerWhereUniqueInput],
  })
  disconnect?: Array<AnswerWhereUniqueInput>;

  @ApiProperty({
    required: false,
    type: () => [AnswerWhereUniqueInput],
  })
  set?: Array<AnswerWhereUniqueInput>;
}

export { AnswerUpdateManyWithoutSubmissionsInput as AnswerUpdateManyWithoutSubmissionsInput };
