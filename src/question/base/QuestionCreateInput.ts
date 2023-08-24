import { IsJSONValue } from '@app/custom-validators';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsEnum, IsOptional, IsString, ValidateNested } from 'class-validator';
import { InputJsonValue } from 'src/types';
import { FormWhereUniqueInput } from '../../form/base/FormWhereUniqueInput';
import { AnswerCreateNestedManyWithoutQuestionsInput } from './AnswerCreateNestedManyWithoutQuestionsInput';
import { EnumQuestionQuestionType } from './EnumQuestionQuestionType';

class QuestionCreateInput {
  @ApiProperty({
    required: false,
    type: () => AnswerCreateNestedManyWithoutQuestionsInput,
  })
  @ValidateNested()
  @Type(() => AnswerCreateNestedManyWithoutQuestionsInput)
  @IsOptional()
  answers?: AnswerCreateNestedManyWithoutQuestionsInput;

  @ApiProperty({
    required: true,
    type: () => FormWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => FormWhereUniqueInput)
  form!: FormWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  label!: string;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  options?: InputJsonValue;

  @ApiProperty({
    required: true,
    enum: EnumQuestionQuestionType,
  })
  @IsEnum(EnumQuestionQuestionType)
  questionType!: 'Text' | 'Checkbox' | 'Radio' | 'Dropdown';
}

export { QuestionCreateInput as QuestionCreateInput };
