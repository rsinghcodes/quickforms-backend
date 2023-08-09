import { ApiProperty } from '@nestjs/swagger';

class MetaQueryPayload {
  @ApiProperty({
    required: true,
    type: [Number],
  })
  count!: number;
}
export { MetaQueryPayload };
