import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsString, ValidateNested } from 'class-validator';
import { Question } from '../../question/base/Question';
import { Submission } from '../../submission/base/Submission';

class Answer {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  id!: string;

  @ApiProperty({
    required: true,
    type: () => Question,
  })
  @ValidateNested()
  @Type(() => Question)
  question?: Question;

  @ApiProperty({
    required: true,
    type: () => Submission,
  })
  @ValidateNested()
  @Type(() => Submission)
  submission?: Submission;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  value!: string;
}

export { Answer as Answer };
