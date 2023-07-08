import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional } from 'class-validator';

export class DateTimeFilter {
  @ApiProperty({
    required: false,
    type: Date,
  })
  @IsOptional()
  @Type(() => Date)
  equals?: Date;

  @ApiProperty({
    required: false,
    type: Date,
  })
  @IsOptional()
  @Type(() => Date)
  not?: Date;

  @ApiProperty({
    required: false,
    type: [Date],
  })
  @IsOptional()
  @Type(() => Date)
  in?: Date[];

  @ApiProperty({
    required: false,
    type: [Date],
  })
  @IsOptional()
  @Type(() => Date)
  notIn?: Date[];

  @ApiProperty({
    required: false,
    type: Date,
  })
  @IsOptional()
  @Type(() => Date)
  lt?: Date;

  @ApiProperty({
    required: false,
    type: Date,
  })
  @IsOptional()
  @Type(() => Date)
  lte?: Date;

  @ApiProperty({
    required: false,
    type: Date,
  })
  @IsOptional()
  @Type(() => Date)
  gt?: Date;

  @ApiProperty({
    required: false,
    type: Date,
  })
  @IsOptional()
  @Type(() => Date)
  gte?: Date;
}
