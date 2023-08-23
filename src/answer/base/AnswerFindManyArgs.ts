import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsOptional, ValidateNested } from 'class-validator';
import { AnswerOrderByInput } from './AnswerOrderByInput';
import { AnswerWhereInput } from './AnswerWhereInput';

class AnswerFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => AnswerWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Type(() => AnswerWhereInput)
  where?: AnswerWhereInput;

  @ApiProperty({
    required: false,
    type: [AnswerOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => AnswerOrderByInput)
  orderBy?: Array<AnswerOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  take?: number;
}

export { AnswerFindManyArgs as AnswerFindManyArgs };
