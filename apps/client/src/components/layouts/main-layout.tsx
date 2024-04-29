import { Outlet } from 'react-router-dom'

import { Sidebar } from '@/components/sidebar'
import { MobileHeader } from '@/components/mobile-header'
import { MobileFooterNav } from '@/components/mobile-footer-nav'

export function MainLayout() {
  return (
    <>
      <Sidebar className="hidden md:flex" />
      <MobileHeader />
      <main className="lg:pl-[256px] md:pl-[88px] md:pb-0 pb-[80px] size-full md:pt-0 pt-[50px]">
        <div className="h-full">
          <Outlet />
        </div>
      </main>
      <MobileFooterNav />
    </>
  )
}
