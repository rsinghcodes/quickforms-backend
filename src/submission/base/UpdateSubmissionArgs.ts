import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { SubmissionUpdateInput } from './SubmissionUpdateInput';
import { SubmissionWhereUniqueInput } from './SubmissionWhereUniqueInput';

class UpdateSubmissionArgs {
  @ApiProperty({
    required: true,
    type: () => SubmissionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SubmissionWhereUniqueInput)
  where!: SubmissionWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => SubmissionUpdateInput,
  })
  @ValidateNested()
  @Type(() => SubmissionUpdateInput)
  data!: SubmissionUpdateInput;
}

export { UpdateSubmissionArgs as UpdateSubmissionArgs };
