import { IsJSONValue } from '@app/custom-validators';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsEnum, IsOptional, IsString, ValidateNested } from 'class-validator';
import { JsonValue } from 'type-fest';
import { Answer } from '../../answer/base/Answer';
import { Form } from '../../form/base/Form';
import { EnumQuestionQuestionType } from './EnumQuestionQuestionType';

class Question {
  @ApiProperty({
    required: false,
    type: () => [Answer],
  })
  @ValidateNested()
  @Type(() => Answer)
  @IsOptional()
  answers?: Array<Answer>;

  @ApiProperty({
    required: true,
    type: () => Form,
  })
  @ValidateNested()
  @Type(() => Form)
  form?: Form;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  id!: string;

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
  options!: JsonValue;

  @ApiProperty({
    required: true,
    enum: EnumQuestionQuestionType,
  })
  @IsEnum(EnumQuestionQuestionType)
  questionType?: 'Text' | 'Checkbox' | 'Radio' | 'Dropdown';
}

export { Question as Question };
