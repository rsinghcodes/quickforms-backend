import { ApiProperty } from '@nestjs/swagger';
import { SubmissionWhereUniqueInput } from '../../submission/base/SubmissionWhereUniqueInput';

class SubmissionUpdateManyWithoutFormsInput {
  @ApiProperty({
    required: false,
    type: () => [SubmissionWhereUniqueInput],
  })
  connect?: Array<SubmissionWhereUniqueInput>;

  @ApiProperty({
    required: false,
    type: () => [SubmissionWhereUniqueInput],
  })
  disconnect?: Array<SubmissionWhereUniqueInput>;

  @ApiProperty({
    required: false,
    type: () => [SubmissionWhereUniqueInput],
  })
  set?: Array<SubmissionWhereUniqueInput>;
}

export { SubmissionUpdateManyWithoutFormsInput as SubmissionUpdateManyWithoutFormsInput };
