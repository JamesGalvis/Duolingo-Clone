import useSwr, { preload } from 'swr'
import { useAuth } from '@clerk/clerk-react'

import { Course } from '@/types'
import { fetcher } from '@/lib/fetcher'
import { useUserProgress } from '@/hooks/swr-calls'
import List from '@/components/list'
import { Loader } from '@/components/loader'
import { Error } from '@/components/error'

preload('/api/courses', fetcher)

export function CoursesPage() {
  const { userId } = useAuth()

  const { data: courses, error, isLoading } = useSwr<Course[]>('/api/courses')

  const { userProgress, isError: userProgressError } = useUserProgress(userId)

  if (isLoading) {
    return <Loader />
  }

  if (error || userProgressError) {
    return <Error />
  }

  return (
    <div className="h-full max-w-[912px] px-3 mx-auto">
      <h1 className="text-2xl font-bold text-neutral-700 dark:text-[#f1f7fb]">
        Language Courses
      </h1>
      <List courses={courses} activeCourse={userProgress?.activeCourseId} />
    </div>
  )
}
