import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional } from 'class-validator';
import { StringFilter } from '../../util/StringFilter';

class QuestionWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  id?: StringFilter;
}

export { QuestionWhereInput as QuestionWhereInput };
