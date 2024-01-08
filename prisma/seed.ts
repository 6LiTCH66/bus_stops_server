import * as fs from 'fs';
import { parse } from 'csv-parse';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


function fileParser(fileName: string){
  return fs.createReadStream(`./utils/${fileName}`)
    .pipe(parse({
      columns: true,
      skip_empty_lines: true
    }));

}


async function seedStopTimes() {

  const parser = fileParser("stop_times.txt")

  for await (const record of parser) {
    await prisma.stopTimes.create({
      data: {
        trip_id: parseInt(record.trip_id),
        arrival_time: record.arrival_time,
        departure_time: record.departure_time,
        stop_id: parseInt(record.stop_id),
        stop_sequence: parseInt(record.stop_sequence),
        pickup_type: parseInt(record.pickup_type),
        drop_off_type: parseInt(record.drop_off_type),
      }
    });
  }
}

async function seedStop() {

  const parser = fileParser("stops.txt")

  for await (const record of parser) {
    await prisma.stop.create({
      data: {
        stop_id: parseInt(record.stop_id),
        stop_code: record.stop_code,
        stop_name: record.stop_name,
        stop_lat: parseFloat(record.stop_lat),
        stop_lon: parseFloat(record.stop_lon),
        zone_id: parseInt(record.zone_id),
        alias: record.alias,
        stop_area: record.stop_area,
        stop_desc: record.stop_desc,
        lest_x: parseFloat(record.lest_x),
        lest_y: parseFloat(record.lest_y),
        zone_name: record.zone_name,
        authority: record.authority
      }
    });
  }

}

async function seedRoute() {

  const parser = fileParser("routes.txt")

  for await (const record of parser) {
    await prisma.route.create({
      data: {
        route_id: record.route_id,
        agency_id: parseInt(record.agency_id),
        route_short_name: record.route_short_name,
        route_long_name: record.route_long_name,
        route_type: parseInt(record.route_type),
        route_color: record.route_color,
        competent_authority: record.competent_authority,
        route_desc: record.route_desc,

      }
    });
  }
}


async function seedTrips() {

  const parser = fileParser("trips.txt")

  for await (const record of parser) {
    await prisma.trip.create({
      data: {
        route_id: record.route_id,
        service_id: parseInt(record.service_id),
        trip_id: parseInt(record.trip_id),
        trip_headsign: record.trip_headsign,
        trip_long_name: record.trip_long_name,
        direction_code: record.direction_code,
        shape_id: parseInt(record.shape_id),
        wheelchair_accessible: parseInt(record.wheelchair_accessible),

      }
    });
  }
}

async function main() {
  await seedStop()
  await seedStopTimes()
  await seedRoute()
  await seedTrips()


}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
