import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { SubmissionWhereUniqueInput } from './SubmissionWhereUniqueInput';

class SubmissionFindUniqueArgs {
  @ApiProperty({
    required: true,
    type: () => SubmissionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SubmissionWhereUniqueInput)
  where!: SubmissionWhereUniqueInput;
}

export { SubmissionFindUniqueArgs as SubmissionFindUniqueArgs };
