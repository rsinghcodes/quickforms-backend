import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, IsEnum, IsOptional, IsString, ValidateNested } from 'class-validator';
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
    required: false,
    type: () => [String],
  })
  @IsArray()
  @IsOptional()
  dropdownOptions!: string[];

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
    type: () => [String],
  })
  @IsArray()
  @IsOptional()
  options!: string[];

  @ApiProperty({
    required: true,
    enum: EnumQuestionQuestionType,
  })
  @IsEnum(EnumQuestionQuestionType)
  questionType?: 'Text' | 'Checkbox' | 'Radio' | 'Dropdown';
}

export { Question as Question };
