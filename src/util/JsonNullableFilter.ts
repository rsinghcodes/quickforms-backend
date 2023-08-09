import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import type { JsonValue } from 'type-fest';

export class JsonNullableFilter {
  @ApiProperty({
    required: false,
  })
  @IsOptional()
  equals?: JsonValue;

  @ApiProperty({
    required: false,
  })
  @IsOptional()
  not?: JsonValue;
}
