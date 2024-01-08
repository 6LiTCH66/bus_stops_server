import { Injectable } from '@nestjs/common';
import { PrismaService } from "../prisma/prisma.service";
import { BusesDto, BusStopNameDto, GetBusesByLocationDto, GetBusTimeDto } from "./dto";
import { Prisma, Stop } from "@prisma/client";

@Injectable()
export class BussService {
  constructor(private prismaService: PrismaService) {}

  async getStopNames(dto: BusStopNameDto){
    return this.prismaService.stop.findMany({
      where: {
        ...dto
      }
    })
  }

  async getAllStopArea(){
    return this.prismaService.stop.findMany({
      distinct: ["stop_area"],

    })
  }

  async getBusesForStop(dto: BusesDto){
    const trips = await this.prismaService.stopTimes.findMany({
      where: {
        ...dto
      },
      orderBy:{
        trip_id: "asc"
      }
    })

    const tripIds = trips.map(item => item.trip_id);

    const routes = await this.prismaService.trip.findMany({
      where: {
        trip_id: {
          in: tripIds
        }
      },
      orderBy:{
        trip_id: "asc"
      },
    })
    const routesIds = routes.map(item => item.route_id)


    const buses = await this.prismaService.route.findMany({
      where: {
        route_id: {
          in: routesIds
        }
      }
    })


    for (let i = 0; i < buses.length; i++) {
      for (let y = 0; y < routes.length; y++) {
        if (buses[i].route_id === routes[y].route_id){
          buses[i].route_long_name = routes[y].trip_long_name
          break;
        }
      }
    }

    return buses

  }

  async getClosestStop(lon: string, lat: string): Promise<Stop>{
    const closestStop = await this.prismaService.$queryRaw<Stop[]>(Prisma.sql`
    SELECT *, ST_Distance(
    ST_SetSRID(ST_MakePoint(stop_lon, stop_lat), 4326)::geography,
    ST_SetSRID(ST_MakePoint(${Prisma.raw(lon)}, ${Prisma.raw(lat)}), 4326)::geography
    ) AS distance
    FROM "Stop"
    ORDER BY distance
    LIMIT 1
  `);
    return closestStop[0]
  }

  async getStopNamesByLocation(dto: GetBusesByLocationDto){
    const closestStop = await this.getClosestStop(dto.user_lon.toString(), dto.user_lat.toString())
    return closestStop
  }

  async getBusTime(dto: GetBusTimeDto){
    const currentTime = new Date().toLocaleTimeString()

    const times = await this.prismaService.stopTimes.findMany({
      where: {
        stop_id: dto.stop_id,
        arrival_time: {
          gt: currentTime
        }
      },
      orderBy:{
        trip_id: "asc"
      }
    })

    const tripIds = times.map(item => item.trip_id);

    const routes = await this.prismaService.trip.findMany({
      where: {
        trip_id: {
          in: tripIds
        },
      },
      orderBy:{
        trip_id: "asc"
      }

    })

    const routesIds = routes.map(item => item.route_id)

    const combinedObjects = [];

    for (let i = 0; i < times.length; i++) {
      if (times[i].trip_id === routes[i].trip_id) {
        combinedObjects.push({...times[i], ...routes[i]});
      }
    }

    const bus = await this.prismaService.route.findFirst({
      where: {
        route_id: {
          in: routesIds
        },
        route_short_name: dto.route_short_name
      }
    })

    const filteredBuses = combinedObjects.filter((bus_time) => bus_time.route_id === bus.route_id)

    filteredBuses.sort((a, b) => {
      return a.arrival_time.localeCompare(b.arrival_time);
    })

    return filteredBuses
  }
}
