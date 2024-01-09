import { IsNotEmpty, IsNumber } from "class-validator";

export class GetBusTimeDto{
  @IsNumber()
  @IsNotEmpty()
  stop_id: number
  
  @IsNotEmpty()
  route_short_name: string

  @IsNotEmpty()
  currentTime: string;
}