import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { FormWhereInput } from './FormWhereInput';

class FormCountArgs {
  @ApiProperty({
    required: false,
    type: () => FormWhereInput,
  })
  @Type(() => FormWhereInput)
  where?: FormWhereInput;
}

export { FormCountArgs as FormCountArgs };
