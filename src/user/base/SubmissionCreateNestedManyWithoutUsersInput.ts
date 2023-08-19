import { ApiProperty } from '@nestjs/swagger';
import { SubmissionWhereUniqueInput } from '../../submission/base/SubmissionWhereUniqueInput';

class SubmissionCreateNestedManyWithoutUsersInput {
  @ApiProperty({
    required: false,
    type: () => [SubmissionWhereUniqueInput],
  })
  connect?: Array<SubmissionWhereUniqueInput>;
}

export { SubmissionCreateNestedManyWithoutUsersInput as SubmissionCreateNestedManyWithoutUsersInput };
