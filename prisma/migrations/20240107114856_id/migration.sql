/*
  Warnings:

  - The primary key for the `Route` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Stop` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `StopTimes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Trip` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Route" DROP CONSTRAINT "Route_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Route_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Stop" DROP CONSTRAINT "Stop_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Stop_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "StopTimes" DROP CONSTRAINT "StopTimes_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "StopTimes_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Trip" DROP CONSTRAINT "Trip_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Trip_pkey" PRIMARY KEY ("id");
