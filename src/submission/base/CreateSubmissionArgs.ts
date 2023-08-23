import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { SubmissionCreateInput } from './SubmissionCreateInput';

class CreateSubmissionArgs {
  @ApiProperty({
    required: true,
    type: () => SubmissionCreateInput,
  })
  @ValidateNested()
  @Type(() => SubmissionCreateInput)
  data!: SubmissionCreateInput;
}

export { CreateSubmissionArgs as CreateSubmissionArgs };
