-- CreateTable
CREATE TABLE "StopTimes" (
    "trip_id" INTEGER NOT NULL,
    "arrival_time" TEXT NOT NULL,
    "departure_time" TEXT NOT NULL,
    "stop_id" INTEGER NOT NULL,
    "stop_sequence" INTEGER NOT NULL,
    "pickup_type" INTEGER NOT NULL,
    "drop_off_type" INTEGER NOT NULL,

    CONSTRAINT "StopTimes_pkey" PRIMARY KEY ("trip_id")
);

-- CreateTable
CREATE TABLE "Route" (
    "route_id" TEXT NOT NULL,
    "agency_id" INTEGER NOT NULL,
    "route_short_name" INTEGER NOT NULL,
    "route_long_name" TEXT,
    "route_type" INTEGER,
    "route_color" TEXT,
    "competent_authority" TEXT,
    "route_desc" TEXT,

    CONSTRAINT "Route_pkey" PRIMARY KEY ("route_id")
);

-- CreateTable
CREATE TABLE "Trip" (
    "route_id" TEXT NOT NULL,
    "service_id" INTEGER NOT NULL,
    "trip_id" INTEGER NOT NULL,
    "trip_headsign" TEXT,
    "trip_long_name" TEXT,
    "direction_code" TEXT,
    "shape_id" INTEGER,
    "wheelchair_accessible" INTEGER,

    CONSTRAINT "Trip_pkey" PRIMARY KEY ("route_id")
);
