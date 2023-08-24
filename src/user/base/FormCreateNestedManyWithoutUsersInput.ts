import { ApiProperty } from '@nestjs/swagger';
import { FormWhereUniqueInput } from '../../form/base/FormWhereUniqueInput';

class FormCreateNestedManyWithoutUsersInput {
  @ApiProperty({
    required: false,
    type: () => [FormWhereUniqueInput],
  })
  connect?: Array<FormWhereUniqueInput>;
}

export { FormCreateNestedManyWithoutUsersInput as FormCreateNestedManyWithoutUsersInput };
