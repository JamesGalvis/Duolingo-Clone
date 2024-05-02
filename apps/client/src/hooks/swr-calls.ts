import useSwr from 'swr'
// import { fetcher } from '@/lib/fetcher'
import { UserProgress } from '@/types'

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
