import { Body, Controller, Get, Post } from '@nestjs/common';
import { BussService } from './buss.service';
import { BusesDto, BusStopNameDto, GetBusesByLocationDto, GetBusTimeDto } from "./dto";

@Controller('buss')
export class BussController {
  constructor(private bussService: BussService) {}
  @Post()
  getStopName(@Body() dto: BusStopNameDto){
    return this.bussService.getStopNames(dto)
  }

  @Post('all')
  getBusesForStop(@Body() dto: BusesDto){
    return this.bussService.getBusesForStop(dto)
  }
  @Post('location')
  getBusesByLocation(@Body() dto: GetBusesByLocationDto){
    return this.bussService.getStopNamesByLocation(dto)
  }

  @Post('location/bus-time')
  getBusTime(@Body() dto: GetBusTimeDto){
    return this.bussService.getBusTime(dto)
  }

  @Get('stop-area')
  getAllStopArea(){
    return this.bussService.getAllStopArea()
  }

}
