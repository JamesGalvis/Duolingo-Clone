import { Navigate } from 'react-router-dom'
import { useAuth } from '@clerk/clerk-react'

import { useUnits, useUserProgress } from '@/hooks/swr-calls'
import { StickyWrapper } from '@/components/sticky-wrapper'
import { FeedWrapper } from '@/components/feed-wrapper'
import { UserProgress } from '@/components/user-progress'
import { Loader } from '@/components/loader'
import { Unit } from '@/components/unit'

export function Learn() {
  const { userId } = useAuth()

  const { userProgress, isLoading } = useUserProgress(userId)
  const { units } = useUnits(userId)

  if (isLoading) {
    return <Loader />
  }

  if (!userProgress || !userProgress.activeCourse) {
    return <Navigate to="/courses" replace />
  }

  return (
    <div className="flex flex-row-reverse gap-[48px] lg:px-6">
      <StickyWrapper>
        <UserProgress
          activeCourse={userProgress.activeCourse}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={false}
        />
      </StickyWrapper>
      <FeedWrapper>
        {units.map((unit) => (
          <div key={unit.id} className="mb-10 pt-6 max-lg:px-6 max-xs:px-3">
            <Unit
              id={unit.id}
              order={unit.order}
              description={unit.description}
              title={unit.title}
              lessons={unit.lessons}
              activeLesson={null}
              activeLessonPercentage={0}
            />
          </div>
        ))}
      </FeedWrapper>
    </div>
  )
}
