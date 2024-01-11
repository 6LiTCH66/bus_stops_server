import { IsNotEmpty, IsNumber } from "class-validator";
import { Type } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";

export class GetBusesByLocationDto{
  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  @ApiProperty({ example: '59.365877', description: 'Your Latitude' })
  user_lat: number;

  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  @ApiProperty({ example: '28.187385', description: 'Your Longitude' })
  user_lon: number;
}