import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional, ValidateNested } from 'class-validator';
import { SubmissionWhereInput } from './SubmissionWhereInput';

class SubmissionListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => SubmissionWhereInput,
  })
  @ValidateNested()
  @Type(() => SubmissionWhereInput)
  @IsOptional()
  every?: SubmissionWhereInput;

  @ApiProperty({
    required: false,
    type: () => SubmissionWhereInput,
  })
  @ValidateNested()
  @Type(() => SubmissionWhereInput)
  @IsOptional()
  some?: SubmissionWhereInput;

  @ApiProperty({
    required: false,
    type: () => SubmissionWhereInput,
  })
  @ValidateNested()
  @Type(() => SubmissionWhereInput)
  @IsOptional()
  none?: SubmissionWhereInput;
}
export { SubmissionListRelationFilter as SubmissionListRelationFilter };
