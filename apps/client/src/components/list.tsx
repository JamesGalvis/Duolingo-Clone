import { Course } from '@/types'
import { Card } from '@/components/card'

interface ListProps {
  courses: Course[] | undefined
  activeCourse: number
}

function List({ activeCourse, courses }: ListProps) {
  return (
    <div className="pt-6 pb-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4">
      {courses?.map((course, i) => (
        <Card
          key={course.id}
          id={course.id}
          title={course.title}
          imageSrc={course.imageSrc}
          onClick={() => {}}
          disabled={false}
          isActive={activeCourse === i}
        />
      ))}
    </div>
  )
}

export default List
