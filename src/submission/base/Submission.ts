import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDate, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Answer } from '../../answer/base/Answer';
import { Form } from '../../form/base/Form';
import { User } from '../../user/base/User';

class Submission {
  @ApiProperty({
    required: true,
    type: () => [Answer],
  })
  @ValidateNested()
  @Type(() => Answer)
  @IsOptional()
  answers?: Array<Answer>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: () => User,
  })
  @ValidateNested()
  @Type(() => User)
  createdBy?: User;

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
}

export { Submission as Submission };
