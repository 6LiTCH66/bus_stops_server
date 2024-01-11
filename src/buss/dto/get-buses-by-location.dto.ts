import { IsNotEmpty, IsNumber } from "class-validator";
import { Type } from "class-transformer";

export class GetBusesByLocationDto{
  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  user_lat: number;

  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  user_lon: number;
}