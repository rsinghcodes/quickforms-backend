import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional } from 'class-validator';
import { SortOrder } from '../../util/SortOrder';

class SubmissionOrderByInput {
  @ApiProperty({
    required: false,
    enum: ['asc', 'desc'],
  })
  @IsOptional()
  @IsEnum(SortOrder)
  createdAt?: SortOrder;

  @ApiProperty({
    required: false,
    enum: ['asc', 'desc'],
  })
  @IsOptional()
  @IsEnum(SortOrder)
  formId?: SortOrder;

  @ApiProperty({
    required: false,
    enum: ['asc', 'desc'],
  })
  @IsOptional()
  @IsEnum(SortOrder)
  id?: SortOrder;

  @ApiProperty({
    required: false,
    enum: ['asc', 'desc'],
  })
  @IsOptional()
  @IsEnum(SortOrder)
  userId?: SortOrder;
}

export { SubmissionOrderByInput as SubmissionOrderByInput };
