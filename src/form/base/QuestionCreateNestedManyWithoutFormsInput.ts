import { ApiProperty } from '@nestjs/swagger';
import { QuestionWhereUniqueInput } from '../../question/base/QuestionWhereUniqueInput';

class QuestionCreateNestedManyWithoutFormsInput {
  @ApiProperty({
    required: false,
    type: () => [QuestionWhereUniqueInput],
  })
  connect?: Array<QuestionWhereUniqueInput>;
}

export { QuestionCreateNestedManyWithoutFormsInput as QuestionCreateNestedManyWithoutFormsInput };
