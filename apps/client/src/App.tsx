import { Route, Routes } from 'react-router-dom'

import { Marketing } from '@/components/pages/marketing'
import { NotFound } from '@/components/pages/not-found'
import { MarketingLayout } from '@/components/layouts/marketing-layout'
import { ProtectedRoutes } from '@/components/layouts/protected-routes'
import { Learn } from '@/components/pages/learn'
import { MainLayout } from '@/components/layouts/main-layout'
import { LeaderboardPage } from '@/components/pages/leaderboard'
import { QuestsPage } from '@/components/pages/quests'
import { StorePage } from '@/components/pages/store'
import { CoursesPage } from '@/components/pages/courses'

function App() {
  return (
    <div className="size-full">
      <Routes>
        <Route path="/" element={<MarketingLayout />}>
          <Route index element={<Marketing />} />
        </Route>

        <Route element={<ProtectedRoutes />}>
          <Route element={<MainLayout />}>
            <Route path="/learn" element={<Learn />} />
            <Route path="/leaderboard" element={<LeaderboardPage />} />
            <Route path="/quest" element={<QuestsPage />} />
            <Route path="/store" element={<StorePage />} />
            <Route path="/courses" element={<CoursesPage />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
