import { ApiProperty } from '@nestjs/swagger';
import { FormWhereUniqueInput } from '../../form/base/FormWhereUniqueInput';

class FormUpdateManyWithoutUsersInput {
  @ApiProperty({
    required: false,
    type: () => [FormWhereUniqueInput],
  })
  connect?: Array<FormWhereUniqueInput>;

  @ApiProperty({
    required: false,
    type: () => [FormWhereUniqueInput],
  })
  disconnect?: Array<FormWhereUniqueInput>;

  @ApiProperty({
    required: false,
    type: () => [FormWhereUniqueInput],
  })
  set?: Array<FormWhereUniqueInput>;
}

export { FormUpdateManyWithoutUsersInput as FormUpdateManyWithoutUsersInput };
