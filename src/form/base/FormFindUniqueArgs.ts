import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { FormWhereUniqueInput } from './FormWhereUniqueInput';

class FormFindUniqueArgs {
  @ApiProperty({
    required: true,
    type: () => FormWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => FormWhereUniqueInput)
  where!: FormWhereUniqueInput;
}

export { FormFindUniqueArgs as FormFindUniqueArgs };
