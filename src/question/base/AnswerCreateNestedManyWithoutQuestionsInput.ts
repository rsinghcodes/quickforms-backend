import { ApiProperty } from '@nestjs/swagger';
import { AnswerWhereUniqueInput } from '../../answer/base/AnswerWhereUniqueInput';

class AnswerCreateNestedManyWithoutQuestionsInput {
  @ApiProperty({
    required: false,
    type: () => [AnswerWhereUniqueInput],
  })
  connect?: Array<AnswerWhereUniqueInput>;
}

export { AnswerCreateNestedManyWithoutQuestionsInput as AnswerCreateNestedManyWithoutQuestionsInput };
