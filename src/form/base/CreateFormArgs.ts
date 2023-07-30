import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { FormCreateInput } from './FormCreateInput';

class CreateFormArgs {
  @ApiProperty({
    required: true,
    type: () => FormCreateInput,
  })
  @ValidateNested()
  @Type(() => FormCreateInput)
  data!: FormCreateInput;
}

export { CreateFormArgs as CreateFormArgs };
