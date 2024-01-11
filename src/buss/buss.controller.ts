import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { BussService } from './buss.service';
import { BusesDto, BusStopNameDto, GetBusesByLocationDto, GetBusTimeDto } from "./dto";

@Controller('buss')
export class BussController {
  constructor(private bussService: BussService) {}
  @Get()
  getStopName(@Query() dto: BusStopNameDto){
    return this.bussService.getStopNames(dto)
  }

  @Get('all')
  getBusesForStop(@Query() dto: BusesDto){
    return this.bussService.getBusesForStop(dto)
  }
  @Get('location')
  getBusesByLocation(@Query() dto: GetBusesByLocationDto){
    return this.bussService.getStopNamesByLocation(dto)
  }

  @Get('location/bus-time')
  getBusTime(@Query() dto: GetBusTimeDto){
    return this.bussService.getBusTime(dto)
  }

  @Get('stop-area')
  getAllStopArea(){
    return this.bussService.getAllStopArea()
  }

}
