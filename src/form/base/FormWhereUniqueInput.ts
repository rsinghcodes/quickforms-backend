import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

class FormWhereUniqueInput {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  id!: string;
}

export { FormWhereUniqueInput as FormWhereUniqueInput };
