import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional, ValidateNested } from 'class-validator';
import { QuestionWhereInput } from './QuestionWhereInput';

class QuestionListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => QuestionWhereInput,
  })
  @ValidateNested()
  @Type(() => QuestionWhereInput)
  @IsOptional()
  every?: QuestionWhereInput;

  @ApiProperty({
    required: false,
    type: () => QuestionWhereInput,
  })
  @ValidateNested()
  @Type(() => QuestionWhereInput)
  @IsOptional()
  some?: QuestionWhereInput;

  @ApiProperty({
    required: false,
    type: () => QuestionWhereInput,
  })
  @ValidateNested()
  @Type(() => QuestionWhereInput)
  @IsOptional()
  none?: QuestionWhereInput;
}
export { QuestionListRelationFilter as QuestionListRelationFilter };
