import { Outlet } from 'react-router-dom'

import { Sidebar } from '@/components/sidebar'
import { MobileHeader } from '@/components/mobile-header'
import { MobileFooterNav } from '@/components/mobile-footer-nav'

export function MainLayout() {
  return (
    <div className='relative h-full'>
      <Sidebar className="hidden md:flex" />
      <MobileHeader />
      <main className="xl:pl-[256px] md:pl-[88px] md:pb-0 pb-[80px] h-full md:pt-0 pt-[50px]">
        <div className="max-w-[1056px] mx-auto pt-6 min-h-full">
          <Outlet />
        </div>
      </main>
      <MobileFooterNav />
    </div>
  )
}
