import { Course } from '@/types'
import { Card } from '@/components/card'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useAuth } from '@clerk/clerk-react'
import useSWR, { useSWRConfig } from 'swr'

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

  // const { userId } = useAuth()
  // const [pending, setPending] = useState<boolean>(false)
  // const [coursesData, setCoursesData] = useState<Course[] | undefined>(courses)
  // const navigate = useNavigate()

  // useEffect(() => {
  //   return () => {
  //     setPending(false)
  //   }
  // }, [])

  // const onClick = async (id: string) => {
  //   if (pending) {
  //     return
  //   }

  //   setPending(true)

  //   if (id === activeCourse) {
  //     navigate('/learn')
  //     return
  //   }

  //   try {
  //     const response = await fetch(`/api/users/${id}/${userId}`)
  //     if (response.ok) {
  //       const data = await response.json()
  //       if (data) {
  //         setCoursesData(data)
  //         navigate('/learn')
  //       }
  //     } else {
  //       console.error(`Error ${response.status}: ${response.statusText}`)
  //     }
  //   } catch (error) {
  //     console.error('Error fetching data:', error)
  //   } finally {
  //     setPending(false)
  //   }
  // }

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
