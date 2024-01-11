import {Controller, Get, Query } from "@nestjs/common";
import { BussService } from './buss.service';
import { BusesDto, BusStopNameDto, GetBusesByLocationDto, GetBusTimeDto } from "./dto";
import { ApiResponse, ApiTags } from "@nestjs/swagger";

@Controller('buss')
@ApiTags('bus')
export class BussController {
  constructor(private bussService: BussService) {}
  @Get()
  @ApiResponse({ status: 200, description: 'Based on stop area or/and stop name return array of stops in the area.' })
  getStopName(@Query() dto: BusStopNameDto){
    return this.bussService.getStopNames(dto)
  }

  @Get('all')
  @ApiResponse({ status: 200, description: 'Based on the id of the stop return all buses of the stop.' })
  getBusesForStop(@Query() dto: BusesDto){
    return this.bussService.getBusesForStop(dto)
  }
  @Get('location')
  @ApiResponse({ status: 200, description: 'Return closest bus stop based on your location (lat, lon).' })
  getBusesByLocation(@Query() dto: GetBusesByLocationDto){
    return this.bussService.getStopNamesByLocation(dto)
  }

  @Get('location/bus-time')
  @ApiResponse({ status: 200, description: 'Return array of the specified bus based on the current time and id of the stop.' })
  getBusTime(@Query() dto: GetBusTimeDto){
    return this.bussService.getBusTime(dto)
  }

  @Get('stop-area')
  @ApiResponse({ status: 200, description: 'Return all stop area in Estonia.' })
  getAllStopArea(){
    return this.bussService.getAllStopArea()
  }

}
