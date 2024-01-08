/*
  Warnings:

  - Changed the type of `arrival_time` on the `StopTimes` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `departure_time` on the `StopTimes` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
-- Handle '24:00:00' time values
UPDATE "StopTimes"
SET "arrival_time" = REPLACE("arrival_time", '24:00:00', '00:00:00');
-- If you need to adjust the date, add the logic here

UPDATE "StopTimes"
SET "departure_time" = REPLACE("departure_time", '24:00:00', '00:00:00');
-- If you need to adjust the date, add the logic here

-- Add temporary columns
ALTER TABLE "StopTimes" ADD COLUMN "temp_arrival_time" TIMESTAMP(3);
ALTER TABLE "StopTimes" ADD COLUMN "temp_departure_time" TIMESTAMP(3);

-- Copy and convert data from old columns to new columns
UPDATE "StopTimes"
SET "temp_arrival_time" = TO_TIMESTAMP("arrival_time", 'HH24:MI:SS'),
    "temp_departure_time" = TO_TIMESTAMP("departure_time", 'HH24:MI:SS');

-- Drop the old string columns
ALTER TABLE "StopTimes" DROP COLUMN "arrival_time";
ALTER TABLE "StopTimes" DROP COLUMN "departure_time";

-- Rename the new columns to the original names
ALTER TABLE "StopTimes" RENAME COLUMN "temp_arrival_time" TO "arrival_time";
ALTER TABLE "StopTimes" RENAME COLUMN "temp_departure_time" TO "departure_time";


