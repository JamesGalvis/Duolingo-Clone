import { Outlet } from 'react-router-dom'

import { Sidebar } from '@/components/sidebar'
import { MobileHeader } from '@/components/mobile-header'

export function MainLayout() {
  return (
    <>
      <Sidebar className="hidden lg:flex" />
      <MobileHeader />
      <main className="lg:pl-[256px] size-full pt-[50px] lg:pt-0">
        <div className="h-full">
          <Outlet />
        </div>
      </main>
    </>
  )
}
