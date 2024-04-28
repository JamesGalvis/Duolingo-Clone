import { Route, Routes } from 'react-router-dom'

import { Marketing } from '@/components/pages/marketing'
import { NotFound } from '@/components/pages/not-found'
import { MarketingLayout } from '@/components/layouts/marketing-layout'

function App() {
  return (
    <div className="size-full">
      <Routes>
        <Route path="/" element={<MarketingLayout />}>
          <Route index element={<Marketing />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
