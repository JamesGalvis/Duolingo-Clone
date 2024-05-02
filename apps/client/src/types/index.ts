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