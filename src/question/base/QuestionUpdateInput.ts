import { IsJSONValue } from '@app/custom-validators';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsEnum, IsOptional, IsString, ValidateNested } from 'class-validator';
import { InputJsonValue } from 'src/types';
import { FormWhereUniqueInput } from '../../form/base/FormWhereUniqueInput';
import { AnswerUpdateManyWithoutQuestionsInput } from './AnswerUpdateManyWithoutQuestionsInput';
import { EnumQuestionQuestionType } from './EnumQuestionQuestionType';

class QuestionUpdateInput {
  @ApiProperty({
    required: false,
    type: () => AnswerUpdateManyWithoutQuestionsInput,
  })
  @ValidateNested()
  @Type(() => AnswerUpdateManyWithoutQuestionsInput)
  @IsOptional()
  answers?: AnswerUpdateManyWithoutQuestionsInput;

  @ApiProperty({
    required: false,
    type: () => FormWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => FormWhereUniqueInput)
  @IsOptional()
  form?: FormWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  label?: string;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  options?: InputJsonValue;

  @ApiProperty({
    required: false,
    enum: EnumQuestionQuestionType,
  })
  @IsEnum(EnumQuestionQuestionType)
  @IsOptional()
  questionType?: 'Text' | 'Checkbox' | 'Radio' | 'Dropdown';
}

export { QuestionUpdateInput as QuestionUpdateInput };
