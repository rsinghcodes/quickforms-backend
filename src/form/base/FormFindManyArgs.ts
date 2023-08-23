import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsOptional, ValidateNested } from 'class-validator';
import { FormOrderByInput } from './FormOrderByInput';
import { FormWhereInput } from './FormWhereInput';

class FormFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => FormWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Type(() => FormWhereInput)
  where?: FormWhereInput;

  @ApiProperty({
    required: false,
    type: [FormOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => FormOrderByInput)
  orderBy?: Array<FormOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  take?: number;
}

export { FormFindManyArgs as FormFindManyArgs };
