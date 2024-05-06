import useSwr from 'swr'
import { CourseProgress, CourseUnit, UserProgress } from '@/types'

export const useUserProgress = (userId: string | null | undefined) => {
  const { data, error, isLoading } = useSwr<UserProgress | null | undefined>(
    `/api/users/${userId}`
  )

  return {
    userProgress: data,
    isLoading,
    isError: error,
  }
}

export const useUpsertUserProgress = (userId: string | null | undefined) => {
  const { data, error, isLoading } = useSwr<UserProgress | null | undefined>(
    `/api/users/${userId}`
  )

  return {
    userProgress: data,
    isLoading,
    isError: error,
  }
}

export const useUnits = (userId: string | null | undefined) => {
  const { data, error, isLoading } = useSwr<CourseUnit[] | []>(
    !userId ? [] : `/api/units/${userId}`
  )

  return {
    units: !data ? [] : data,
    isLoading,
    isError: error,
  }
}

export const useCourseProgress = (userId: string | null | undefined) => {
  const { data, error, isLoading } = useSwr<CourseProgress | null>(
    !userId ? {} : `/api/courses/progress/${userId}`
  )

  return {
    courseProgress: data,
    isLoading,
    isError: error,
  }
}

export const useLessonPercentage = (userId: string | null | undefined) => {
  const { data, error, isLoading } = useSwr<number>(
    `/api/lessons/lesson-percentage/${userId}`
  )

  return {
    percentage: !data ? 0 : data,
    isLoading,
    isError: error,
  }
}
