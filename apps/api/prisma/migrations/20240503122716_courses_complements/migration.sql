-- CreateEnum
CREATE TYPE "ChallengeType" AS ENUM ('SELECT', 'ASSIST');

-- CreateTable
CREATE TABLE "Units" (
    "id" STRING NOT NULL,
    "title" STRING NOT NULL,
    "description" STRING NOT NULL,
    "courseId" STRING NOT NULL,

    CONSTRAINT "Units_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Lessons" (
    "id" STRING NOT NULL,
    "title" STRING NOT NULL,
    "order" INT4 NOT NULL,
    "unitId" STRING NOT NULL,

    CONSTRAINT "Lessons_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Challenges" (
    "id" STRING NOT NULL,
    "type" "ChallengeType" NOT NULL,
    "question" STRING NOT NULL,
    "order" INT4 NOT NULL,
    "lessonId" STRING NOT NULL,

    CONSTRAINT "Challenges_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChallengeOptions" (
    "id" STRING NOT NULL,
    "text" STRING NOT NULL,
    "correct" BOOL NOT NULL,
    "imageSrc" STRING,
    "audioSrc" STRING,
    "challengeId" STRING NOT NULL,

    CONSTRAINT "ChallengeOptions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChallengeProgress" (
    "id" STRING NOT NULL,
    "userId" STRING NOT NULL,
    "completed" BOOL NOT NULL,
    "challengeId" STRING NOT NULL,

    CONSTRAINT "ChallengeProgress_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Units" ADD CONSTRAINT "Units_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Courses"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lessons" ADD CONSTRAINT "Lessons_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES "Units"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Challenges" ADD CONSTRAINT "Challenges_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "Lessons"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChallengeOptions" ADD CONSTRAINT "ChallengeOptions_challengeId_fkey" FOREIGN KEY ("challengeId") REFERENCES "Challenges"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChallengeProgress" ADD CONSTRAINT "ChallengeProgress_challengeId_fkey" FOREIGN KEY ("challengeId") REFERENCES "Challenges"("id") ON DELETE CASCADE ON UPDATE CASCADE;
