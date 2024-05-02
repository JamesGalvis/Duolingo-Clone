-- CreateTable
CREATE TABLE "UserProgress" (
    "userId" STRING NOT NULL,
    "userName" STRING NOT NULL DEFAULT 'User',
    "userAvatar" STRING NOT NULL DEFAULT '/icons/avatar1.svg',
    "activeCourseId" STRING NOT NULL,
    "hearts" INT4 NOT NULL DEFAULT 5,
    "points" INT4 NOT NULL DEFAULT 0,

    CONSTRAINT "UserProgress_pkey" PRIMARY KEY ("userId")
);

-- CreateIndex
CREATE INDEX "UserProgress_activeCourseId_idx" ON "UserProgress"("activeCourseId");

-- AddForeignKey
ALTER TABLE "UserProgress" ADD CONSTRAINT "UserProgress_activeCourseId_fkey" FOREIGN KEY ("activeCourseId") REFERENCES "Courses"("id") ON DELETE CASCADE ON UPDATE CASCADE;
