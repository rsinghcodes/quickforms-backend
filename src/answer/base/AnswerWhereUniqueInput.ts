import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

class AnswerWhereUniqueInput {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  id!: string;
}

export { AnswerWhereUniqueInput as AnswerWhereUniqueInput };
