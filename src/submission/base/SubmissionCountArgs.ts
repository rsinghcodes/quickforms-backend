import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { SubmissionWhereInput } from './SubmissionWhereInput';

class SubmissionCountArgs {
  @ApiProperty({
    required: false,
    type: () => SubmissionWhereInput,
  })
  @Type(() => SubmissionWhereInput)
  where?: SubmissionWhereInput;
}

export { SubmissionCountArgs as SubmissionCountArgs };
