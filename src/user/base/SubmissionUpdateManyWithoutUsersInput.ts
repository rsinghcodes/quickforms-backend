import { ApiProperty } from '@nestjs/swagger';
import { SubmissionWhereUniqueInput } from '../../submission/base/SubmissionWhereUniqueInput';

class SubmissionUpdateManyWithoutUsersInput {
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

export { SubmissionUpdateManyWithoutUsersInput as SubmissionUpdateManyWithoutUsersInput };
