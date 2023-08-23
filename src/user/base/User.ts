import { IsJSONValue } from '@app/custom-validators';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDate, IsOptional, IsString, ValidateNested } from 'class-validator';
import { JsonValue } from 'type-fest';
import { Submission } from '../../submission/base/Submission';

class User {
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
  firstName!: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  id!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  lastName!: string | null;

  @ApiProperty({
    required: true,
  })
  @IsJSONValue()
  roles!: JsonValue;

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
  })
  @IsDate()
  @Type(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  username!: string;
}

export { User as User };
