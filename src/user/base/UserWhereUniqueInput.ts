import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

class UserWhereUniqueInput {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  id!: string;
}

export { UserWhereUniqueInput as UserWhereUniqueInput };
