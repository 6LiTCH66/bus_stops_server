import { IsInt, IsNotEmpty } from "class-validator";
import { Type } from "class-transformer";

export class BusesDto{
  @IsNotEmpty()
  @Type(() => Number)
  @IsInt()
  stop_id: number
}