import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional } from 'class-validator';

export class BooleanNullableFilter {
  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsOptional()
  @Type(() => Boolean)
  equals?: boolean | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsOptional()
  @Type(() => Boolean)
  not?: boolean | null;
}
