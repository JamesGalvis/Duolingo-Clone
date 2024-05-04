export type Course = { id: string; title: string; imageSrc: string }

export type UserProgress = {
  userId: string
  userName: string
  userAvatar: string
  activeCourseId: string
  hearts: number
  points: number
} & {
  activeCourse: {
    id: string
    title: string
    imageSrc: string
  }
}

export type Challenge = {
  id: string;
  type: string;
  question: string;
  order: number;
  lessonId: string;
  challengeProgress?: ChallengeProgress[];
};

export type ChallengeProgress = {
  id: string;
  userId: string;
  completed: boolean;
  challengeId: string;
  challenge: Challenge;
};

export type Lesson = {
  id: string;
  title: string;
  order: number;
  unitId: string;
  challenges: Challenge[];
  completed: boolean;
};

export type CourseUnit = {
  id: string;
  title: string;
  description: string;
  order: number;
  courseId: string;
  lessons: Lesson[];
};