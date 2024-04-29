import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { InfinityIcon } from 'lucide-react'

interface UserProgressProps {
  activeCourse: {
    title: string
    imageSrc: string
  }
  hearts: number
  points: number
  hasActiveSubscription: boolean
}

export function UserProgress({
  activeCourse,
  hasActiveSubscription,
  hearts,
  points,
}: UserProgressProps) {
  return (
    <div className="flex items-center justify-between gap-x-2 w-full">
      <Link to="/courses">
        <Button variant="ghost">
          <img
            src={activeCourse.imageSrc}
            alt={activeCourse.title}
            className="rounded-md border"
            width={32}
            height={32}
          />
        </Button>
      </Link>
      <Link to="/store">
        <Button variant="ghost" className="text-sky-400">
          <img
            src="/icons/points.svg"
            alt="Points icon"
            className="mr-2"
            width={22.39}
            height={28}
          />
          {points}
        </Button>
      </Link>
      <Link to="/store">
        <Button variant="ghost" className="text-rose-500">
          <img
            src="/icons/heart.svg"
            alt="Heart icon"
            className="mr-2"
            width={28}
            height={28}
          />
          {hasActiveSubscription ? (
            <InfinityIcon className="h-5 w-5 stroke-[3]" />
          ) : (
            hearts
          )}
        </Button>
      </Link>
    </div>
  )
}
