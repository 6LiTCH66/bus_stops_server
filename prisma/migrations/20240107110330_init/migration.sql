-- CreateTable
CREATE TABLE "Stop" (
    "stop_id" INTEGER NOT NULL,
    "stop_code" TEXT NOT NULL,
    "stop_name" TEXT NOT NULL,
    "stop_lat" DOUBLE PRECISION NOT NULL,
    "stop_lon" DOUBLE PRECISION NOT NULL,
    "zone_id" INTEGER NOT NULL,
    "alias" TEXT,
    "stop_area" TEXT NOT NULL,
    "stop_desc" TEXT,
    "lest_x" DOUBLE PRECISION NOT NULL,
    "lest_y" DOUBLE PRECISION NOT NULL,
    "zone_name" TEXT,
    "authority" TEXT,

    CONSTRAINT "Stop_pkey" PRIMARY KEY ("stop_id")
);
