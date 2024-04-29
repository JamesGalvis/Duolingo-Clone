import { Outlet } from 'react-router-dom'

import { Header } from '@/components/maketing-header'
import { Footer } from '@/components/marketing-footer'

export function MarketingLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center px-[55px] py-[44px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
