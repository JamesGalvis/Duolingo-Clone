import { Outlet } from 'react-router-dom'

import { Header } from '@/components/maketing-header'
import { Footer } from '@/components/marketing-footer'

export function MarketingLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center sm:px-[55px] xs:px-[40px] px-[32px] py-[44px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
