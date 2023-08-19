import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

class QuestionWhereUniqueInput {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  id!: string;
}

export { QuestionWhereUniqueInput as QuestionWhereUniqueInput };
