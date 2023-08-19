import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { SubmissionWhereUniqueInput } from './SubmissionWhereUniqueInput';

class DeleteSubmissionArgs {
  @ApiProperty({
    required: true,
    type: () => SubmissionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SubmissionWhereUniqueInput)
  where!: SubmissionWhereUniqueInput;
}

export { DeleteSubmissionArgs as DeleteSubmissionArgs };
