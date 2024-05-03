/*
  Warnings:

  - Added the required column `order` to the `Units` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Units" ADD COLUMN     "order" INT4 NOT NULL;
