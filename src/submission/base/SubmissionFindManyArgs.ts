import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsOptional, ValidateNested } from 'class-validator';
import { SubmissionOrderByInput } from './SubmissionOrderByInput';
import { SubmissionWhereInput } from './SubmissionWhereInput';

class SubmissionFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => SubmissionWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Type(() => SubmissionWhereInput)
  where?: SubmissionWhereInput;

  @ApiProperty({
    required: false,
    type: [SubmissionOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => SubmissionOrderByInput)
  orderBy?: Array<SubmissionOrderByInput>;

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

export { SubmissionFindManyArgs as SubmissionFindManyArgs };
