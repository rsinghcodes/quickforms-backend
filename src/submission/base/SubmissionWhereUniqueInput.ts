import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

class SubmissionWhereUniqueInput {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  id!: string;
}

export { SubmissionWhereUniqueInput as SubmissionWhereUniqueInput };
