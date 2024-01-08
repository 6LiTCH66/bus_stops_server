import { IsNotEmpty, IsNumber } from "class-validator";

export class GetBusesByLocationDto{
  @IsNotEmpty()
  @IsNumber()
  user_lat: number;

  @IsNotEmpty()
  @IsNumber()
  user_lon: number;
}