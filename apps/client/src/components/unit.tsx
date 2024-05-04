import { Link } from 'react-router-dom'

import { Lesson } from '@/types'
import { Button } from '@/components/ui/button'
import { LessonButton } from '@/components/lesson-button'

interface UnitProps {
  id: string
  order: number
  description: string
  title: string
  lessons: Lesson[]
  activeLesson: Lesson | null
  activeLessonPercentage: number
}

interface UnitBannerProps {
  title: string
  description: string
}

export function Unit({
  activeLesson,
  activeLessonPercentage,
  description,
  lessons,
  title,
}: UnitProps) {
  return (
    <>
      <UnitBanner title={title} description={description} />
      <div className="flex flex-col items-center relative">
        {lessons.map((lesson, i) => {
          const isCurrent = lesson.id === activeLesson?.id
          const isLocked = !lesson.completed && !isCurrent

          return (
            <LessonButton
              key={lesson.id}
              id={lesson.id}
              index={i}
              totalCount={lessons.length - 1}
              current={true || isCurrent}
              locked={isLocked}
              percentage={activeLessonPercentage}
            />
          )
        })}
      </div>
    </>
  )
}

export function UnitBanner({ title, description }: UnitBannerProps) {
  return (
    <div className="flex items-center justify-between w-full rounded-xl bg-[#FF4B4B] text-[#DCE6EC] lg:p-4 max-lg:border-b-4 border-[#CC3C3C]">
      <div className="-space-y-1 max-lg:p-3 max-lg:px-4">
        <h1 className="text-2xl font-bold text-[#f7f7f7c8]">{title}</h1>
        <p className="text-[22px] max-ms:text-[19px] font-bold text-white">
          {description}
        </p>
      </div>
      <Link to="/lesson" className="max-xs:hidden">
        <Button
          variant="secondary"
          className="bg-[#FF4B4B] border-[#CC3C3C] hover:bg-[#eb3f3f] lg:h-[52px] h-[92px] rounded-r-xl rounded-l-none border-b-0 lg:rounded-2xl lg:border-2 lg:border-b-4 border-l-2 active:border-b-2 lg:gap-2"
        >
          <img
            src="/icons/notebookText.svg"
            alt="NotebookText icon"
            width={24}
            height={24}
            className="min-w-[24px] min-h-[24px]"
          />
          <p className="hidden lg:block">Continue</p>
        </Button>
      </Link>
    </div>
  )
}
