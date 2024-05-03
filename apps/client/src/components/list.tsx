import useSWR, { useSWRConfig } from 'swr'
import { useEffect, useState } from 'react'
import { useAuth } from '@clerk/clerk-react'
import { useNavigate } from 'react-router-dom'

import { Course } from '@/types'
import { Card } from '@/components/card'

interface ListProps {
  courses: Course[] | undefined
  activeCourse?: string
}

function List({ activeCourse, courses }: ListProps) {
  const { userId } = useAuth()
  const { mutate } = useSWRConfig()
  const navigate = useNavigate()

  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null)

  const { data, isLoading } = useSWR(
    selectedCourseId ? `/api/users/${selectedCourseId}/${userId}` : null
  )

  useEffect(() => {
    if (data) {
      mutate(`/api/users/${userId}`)
      navigate('/learn')
    }
  }, [data, navigate, mutate, userId])

  const onClick = (id: string) => {
    setSelectedCourseId(id)
    if (id === activeCourse) {
      navigate('/learn')
    }
  }

  return (
    <div className="pt-6 pb-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4">
      {courses?.map((course) => (
        <Card
          key={course.id}
          id={course.id}
          title={course.title}
          imageSrc={course.imageSrc}
          onClick={onClick}
          disabled={isLoading}
          isActive={course.id === activeCourse}
        />
      ))}
    </div>
  )
}

export default List
