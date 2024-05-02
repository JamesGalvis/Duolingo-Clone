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
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <UserProgress
          activeCourse={{ title: 'Spanish', imageSrc: '/icons/es.svg' }}
          hearts={5}
          points={100}
          hasActiveSubscription={false}
        />
      </StickyWrapper>
      <FeedWrapper>
        <Header title="Spanish" />
      </FeedWrapper>
    </div>
  )
}
