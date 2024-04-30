/*
  Warnings:

  - You are about to drop the `Course` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Course";

-- CreateTable
CREATE TABLE "Courses" (
    "id" STRING NOT NULL,
    "title" STRING NOT NULL,
    "imageSrc" STRING NOT NULL,

    CONSTRAINT "Courses_pkey" PRIMARY KEY ("id")
);
