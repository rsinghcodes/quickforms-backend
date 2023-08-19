import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { FormUpdateInput } from './FormUpdateInput';
import { FormWhereUniqueInput } from './FormWhereUniqueInput';

class UpdateFormArgs {
  @ApiProperty({
    required: true,
    type: () => FormWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => FormWhereUniqueInput)
  where!: FormWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => FormUpdateInput,
  })
  @ValidateNested()
  @Type(() => FormUpdateInput)
  data!: FormUpdateInput;
}

export { UpdateFormArgs as UpdateFormArgs };
