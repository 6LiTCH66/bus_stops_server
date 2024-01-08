/*
  Warnings:

  - Made the column `arrival_time` on table `StopTimes` required. This step will fail if there are existing NULL values in that column.
  - Made the column `departure_time` on table `StopTimes` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "StopTimes" ALTER COLUMN "arrival_time" SET NOT NULL,
ALTER COLUMN "departure_time" SET NOT NULL;
