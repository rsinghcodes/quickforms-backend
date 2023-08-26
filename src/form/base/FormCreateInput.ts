import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional, IsString, ValidateNested } from 'class-validator';
import { UserWhereUniqueInput } from '../../user/base/UserWhereUniqueInput';
import { QuestionCreateNestedManyWithoutFormsInput } from './QuestionCreateNestedManyWithoutFormsInput';
import { SubmissionCreateNestedManyWithoutFormsInput } from './SubmissionCreateNestedManyWithoutFormsInput';

class FormCreateInput {
  @ApiProperty({
    required: true,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  createdBy!: UserWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  description?: string | null;

  @ApiProperty({
    required: true,
    type: () => QuestionCreateNestedManyWithoutFormsInput,
  })
  @ValidateNested()
  @Type(() => QuestionCreateNestedManyWithoutFormsInput)
  @IsOptional()
  questions?: QuestionCreateNestedManyWithoutFormsInput;

  @ApiProperty({
    required: false,
    type: () => SubmissionCreateNestedManyWithoutFormsInput,
  })
  @ValidateNested()
  @Type(() => SubmissionCreateNestedManyWithoutFormsInput)
  @IsOptional()
  submissions?: SubmissionCreateNestedManyWithoutFormsInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  title!: string;
}

export { FormCreateInput as FormCreateInput };
