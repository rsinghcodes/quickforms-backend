import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDate, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Question } from '../../question/base/Question';
import { Submission } from '../../submission/base/Submission';

class Form {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  description!: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  id!: string;

  @ApiProperty({
    required: true,
    type: () => [Question],
  })
  @ValidateNested()
  @Type(() => Question)
  @IsOptional()
  questions?: Array<Question>;

  @ApiProperty({
    required: false,
    type: () => [Submission],
  })
  @ValidateNested()
  @Type(() => Submission)
  @IsOptional()
  submissions?: Array<Submission>;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  title!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  updatedAt!: Date;
}

export { Form as Form };
