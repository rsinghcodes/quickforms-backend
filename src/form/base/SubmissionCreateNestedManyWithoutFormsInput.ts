import { ApiProperty } from '@nestjs/swagger';
import { SubmissionWhereUniqueInput } from '../../submission/base/SubmissionWhereUniqueInput';

class SubmissionCreateNestedManyWithoutFormsInput {
  @ApiProperty({
    required: false,
    type: () => [SubmissionWhereUniqueInput],
  })
  connect?: Array<SubmissionWhereUniqueInput>;
}

export { SubmissionCreateNestedManyWithoutFormsInput as SubmissionCreateNestedManyWithoutFormsInput };
