import { IsInt, IsNotEmpty } from "class-validator";
import { Type } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";

export class GetBusTimeDto{
  @IsNotEmpty()
  @Type(() => Number)
  @IsInt()
  @ApiProperty({ example: '20882', description: 'The id of the chosen stop' })
  stop_id: number
  
  @IsNotEmpty()
  @ApiProperty({ example: '6', description: 'The number of the bus' })
  route_short_name: string

  @IsNotEmpty()
  @ApiProperty({ example: '10:30:00', description: 'Current time' })
  currentTime: string;
}