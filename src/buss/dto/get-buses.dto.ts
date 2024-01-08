import { IsInt, IsNotEmpty } from "class-validator";

export class BusesDto{
  @IsNotEmpty()
  @IsInt()
  stop_id: number
}