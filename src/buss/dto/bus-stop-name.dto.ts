import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class BusStopNameDto {

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'Narva linn', description: 'The name of the area' })
  stop_area: string;

  @ApiPropertyOptional({ example: 'Kreenholmi keskus', description: 'The name of the stop' })
  @IsOptional()
  stop_name?: string;

}