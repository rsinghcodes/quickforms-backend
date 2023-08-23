/*
  Warnings:

  - The `dropdownOptions` column on the `Question` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `options` column on the `Question` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Question" DROP COLUMN "dropdownOptions",
ADD COLUMN     "dropdownOptions" TEXT[],
DROP COLUMN "options",
ADD COLUMN     "options" TEXT[];
