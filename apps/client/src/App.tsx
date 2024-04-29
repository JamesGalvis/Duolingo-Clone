import { Route, Routes } from 'react-router-dom'

import { Marketing } from '@/components/pages/marketing'
import { NotFound } from '@/components/pages/not-found'
import { MarketingLayout } from '@/components/layouts/marketing-layout'
import { ProtectedRoutes } from '@/components/layouts/protected-routes'
import { Learn } from '@/components/pages/learn'
import { MainLayout } from '@/components/layouts/main-layout'

function App() {
  return (
    <div className="size-full">
      <Routes>
        <Route path="/" element={<MarketingLayout />}>
          <Route index element={<Marketing />} />
        </Route>

        <Route element={<ProtectedRoutes />}>
          <Route path="/learn" element={<MainLayout />}>
            <Route index element={<Learn />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
