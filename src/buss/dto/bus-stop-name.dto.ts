import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class BusStopNameDto {

  @IsNotEmpty()
  @IsString()
  stop_area: string;

  @IsOptional()
  stop_name?: string;

}