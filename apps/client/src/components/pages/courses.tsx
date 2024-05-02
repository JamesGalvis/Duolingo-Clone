import useSwr, { preload } from 'swr'
import { useAuth } from '@clerk/clerk-react'

import { Course } from '@/types'
import List from '@/components/list'
import { fetcher } from '@/lib/fetcher'
import { useUserProgress } from '@/hooks/swr-calls'
import { Loader } from '@/components/loader'

preload('/api/courses', fetcher)

export function CoursesPage() {
  const { userId } = useAuth()

  const {
    data: courses,
    error,
    isLoading,
  } = useSwr<Course[]>('/api/courses')

  const { userProgress } = useUserProgress(userId)

  // TODO: Mejorar el loading y error de la pagina
  if (isLoading) {
    return <Loader />
  }

  if (error) {
    return (
      <div className="size-full flex items-center justify-center">
        <h2>Error</h2>
      </div>
    )
  }

  return (
    <div className="h-full max-w-[912px] px-3 mx-auto">
      <h1 className="text-2xl font-bold text-neutral-700">Language Courses</h1>
      <List courses={courses} activeCourse={userProgress?.activeCourseId} />
    </div>
  )
}
