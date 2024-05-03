import { Navigate } from 'react-router-dom'
import { useAuth } from '@clerk/clerk-react'

import { useUserProgress } from '@/hooks/swr-calls'
import { StickyWrapper } from '@/components/sticky-wrapper'
import { FeedWrapper } from '@/components/feed-wrapper'
import { Header } from '@/components/feed-header'
import { UserProgress } from '@/components/user-progress'
import { Loader } from '@/components/loader'

export function Learn() {
  const { userId } = useAuth()

  const { userProgress, isLoading } = useUserProgress(userId)

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
        <Header title={userProgress.activeCourse.title} />
      </FeedWrapper>
    </div>
  )
}
