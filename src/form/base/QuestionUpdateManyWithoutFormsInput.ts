import { ApiProperty } from '@nestjs/swagger';
import { QuestionWhereUniqueInput } from '../../question/base/QuestionWhereUniqueInput';

class QuestionUpdateManyWithoutFormsInput {
  @ApiProperty({
    required: false,
    type: () => [QuestionWhereUniqueInput],
  })
  connect?: Array<QuestionWhereUniqueInput>;

  @ApiProperty({
    required: false,
    type: () => [QuestionWhereUniqueInput],
  })
  disconnect?: Array<QuestionWhereUniqueInput>;

  @ApiProperty({
    required: false,
    type: () => [QuestionWhereUniqueInput],
  })
  set?: Array<QuestionWhereUniqueInput>;
}

export { QuestionUpdateManyWithoutFormsInput as QuestionUpdateManyWithoutFormsInput };
