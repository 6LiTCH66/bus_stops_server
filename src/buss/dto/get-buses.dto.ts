import { IsInt, IsNotEmpty } from "class-validator";
import { Type } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";

export class BusesDto{
  @IsNotEmpty()
  @Type(() => Number)
  @IsInt()
  @ApiProperty({ example: '20882', description: 'The id of the chosen stop' })
  stop_id: number
}