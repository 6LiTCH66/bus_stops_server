import { IsInt, IsNotEmpty } from "class-validator";
import { Type } from "class-transformer";

export class GetBusTimeDto{
  @IsNotEmpty()
  @Type(() => Number)
  @IsInt()
  stop_id: number
  
  @IsNotEmpty()
  route_short_name: string

  @IsNotEmpty()
  currentTime: string;
}