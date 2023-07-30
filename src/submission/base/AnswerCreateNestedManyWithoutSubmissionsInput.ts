import { ApiProperty } from '@nestjs/swagger';
import { AnswerWhereUniqueInput } from '../../answer/base/AnswerWhereUniqueInput';

class AnswerCreateNestedManyWithoutSubmissionsInput {
  @ApiProperty({
    required: false,
    type: () => [AnswerWhereUniqueInput],
  })
  connect?: Array<AnswerWhereUniqueInput>;
}

export { AnswerCreateNestedManyWithoutSubmissionsInput as AnswerCreateNestedManyWithoutSubmissionsInput };
