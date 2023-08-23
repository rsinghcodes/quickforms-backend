import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional, ValidateNested } from 'class-validator';
import { AnswerWhereInput } from './AnswerWhereInput';

class AnswerListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => AnswerWhereInput,
  })
  @ValidateNested()
  @Type(() => AnswerWhereInput)
  @IsOptional()
  every?: AnswerWhereInput;

  @ApiProperty({
    required: false,
    type: () => AnswerWhereInput,
  })
  @ValidateNested()
  @Type(() => AnswerWhereInput)
  @IsOptional()
  some?: AnswerWhereInput;

  @ApiProperty({
    required: false,
    type: () => AnswerWhereInput,
  })
  @ValidateNested()
  @Type(() => AnswerWhereInput)
  @IsOptional()
  none?: AnswerWhereInput;
}
export { AnswerListRelationFilter as AnswerListRelationFilter };
