import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsOptional, ValidateNested } from 'class-validator';
import { QuestionOrderByInput } from './QuestionOrderByInput';
import { QuestionWhereInput } from './QuestionWhereInput';

class QuestionFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => QuestionWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Type(() => QuestionWhereInput)
  where?: QuestionWhereInput;

  @ApiProperty({
    required: false,
    type: [QuestionOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => QuestionOrderByInput)
  orderBy?: Array<QuestionOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  take?: number;
}

export { QuestionFindManyArgs as QuestionFindManyArgs };
