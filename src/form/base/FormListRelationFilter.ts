import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional, ValidateNested } from 'class-validator';
import { FormWhereInput } from './FormWhereInput';

class FormListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => FormWhereInput,
  })
  @ValidateNested()
  @Type(() => FormWhereInput)
  @IsOptional()
  every?: FormWhereInput;

  @ApiProperty({
    required: false,
    type: () => FormWhereInput,
  })
  @ValidateNested()
  @Type(() => FormWhereInput)
  @IsOptional()
  some?: FormWhereInput;

  @ApiProperty({
    required: false,
    type: () => FormWhereInput,
  })
  @ValidateNested()
  @Type(() => FormWhereInput)
  @IsOptional()
  none?: FormWhereInput;
}
export { FormListRelationFilter as FormListRelationFilter };
