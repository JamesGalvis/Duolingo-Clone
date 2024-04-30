import useSwr, { preload } from 'swr'
import { Loader } from 'lucide-react'

import { fetcher } from '@/lib/fetcher'
import { Course } from '@/types'
import List from '@/components/list'

preload('/api/courses', fetcher)

export function CoursesPage() {
  const {
    data: courses,
    error,
    isLoading,
  } = useSwr<Course[]>('/api/courses', fetcher)

  // TODO: Mejorar el loading y error de la pagina
  if (isLoading) {
    return (
      <div className="size-full flex items-center justify-center">
        <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
      </div>
    )
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
      <List courses={courses} activeCourse={0} />
    </div>
  )
}
