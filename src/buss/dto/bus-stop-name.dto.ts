import { IsNotEmpty, IsOptional } from "class-validator";

export class BusStopNameDto {

  @IsNotEmpty()
  stop_area: string;

  @IsOptional()
  stop_name?: string;

}