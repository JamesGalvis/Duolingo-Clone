import useSwr from 'swr'
import { CourseUnit, UserProgress } from '@/types'

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
