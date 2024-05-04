import { CircularProgressbarWithChildren } from 'react-circular-progressbar'

import 'react-circular-progressbar/dist/styles.css'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'

interface LessonButtonProps {
  id: string
  index: number
  totalCount: number
  locked?: boolean
  current?: boolean
  percentage: number
}

export function LessonButton({
  id,
  index,
  percentage,
  totalCount,
  current,
  locked,
}: LessonButtonProps) {
  const cycleLength = 8
  const cycleIndex = index % cycleLength

  let indentationLevel

  if (cycleIndex <= 2) {
    indentationLevel = cycleIndex
  } else if (cycleIndex <= 4) {
    indentationLevel = 4 - cycleIndex
  } else if (cycleIndex <= 6) {
    indentationLevel = 4 - cycleIndex
  } else {
    indentationLevel = cycleIndex - 8
  }

  const rightPosition = indentationLevel * 40

  const isFirst = index === 0
  const isLast = index === totalCount
  const isCompleted = !current && !locked

  const srcIcon = isCompleted
    ? '/icons/check.svg'
    : isLast && locked
      ? '/icons/crown.svg'
      : isLast && !locked
        ? '/icons/white-crown.svg'
        : !isLast && locked
          ? '/icons/gray-star.svg'
          : '/icons/star.svg'

  const href = isCompleted ? `/lesson/${id}` : '/lesson'

  return (
    <Link
      to={href}
      aria-disabled={locked}
      style={{ pointerEvents: locked ? 'none' : 'auto' }}
    >
      <div
        className="relative"
        style={{
          right: `${rightPosition}px`,
          marginTop: isFirst && !isCompleted ? 60 : 24,
        }}
      >
        {current ? (
          <div className="h-[102px] w-[102px] relative">
            <div className="absolute -top-6 left-2.5 px-3 py-2.5 border-2 font-bold uppercase text-[#58CC02] bg-white dark:bg-background rounded-xl animate-bounce tracking-wide z-10">
              Start
              <div className="absolute left-1/2 -bottom-2 w-0 h-0 border-x-8 border-x-transparent border-t-8 transform -translate-x-1/2 border-background" />
            </div>
            <CircularProgressbarWithChildren
              value={Number.isNaN(percentage) ? 0 : percentage}
              styles={{
                path: {
                  stroke: '#58CC02',
                },
                trail: {
                  stroke: '#2C383F',
                },
              }}
            >
              <Button
                size="rounded"
                variant={locked ? 'locked' : 'secondary'}
                className="relative h-[73px] w-[70px] border-0"
                style={{
                  boxShadow: `inset 0 -8px 0 ${locked ? '#2c383f' : '#46a302'}`,
                  transform: 'rotateX(18deg) rotateY(0deg) rotateZ(0deg)',
                }}
              >
                <img
                  src={srcIcon}
                  alt="Lesson icon"
                  width={44}
                  height={32}
                  className={cn(
                    'absolute bottom-5',
                    isCompleted && 'fill-none stroke-[4]'
                  )}
                />
              </Button>
            </CircularProgressbarWithChildren>
          </div>
        ) : (
          <div className="w-[70px] h-[65px]">
            <Button
              size="rounded"
              variant={locked ? 'locked' : 'secondary'}
              className="relative h-[73px] w-[70px] border-0"
              style={{
                boxShadow: `inset 0 -8px 0 ${locked ? '#2c383f' : '#46a302'}`,
                transform: 'rotateX(18deg) rotateY(0deg) rotateZ(0deg)',
              }}
            >
              <img
                src={srcIcon}
                alt="Lesson icon"
                width={44}
                height={32}
                className={cn(
                  'absolute bottom-5 z-50',
                  locked
                    ? 'fill-neutral-400 text-neutral-400 stroke-neutral-400'
                    : 'fill-primary-foreground text-primary-foreground',
                  isCompleted && 'fill-none stroke-[4]'
                )}
              />
            </Button>
          </div>
        )}
      </div>
    </Link>
  )
}
