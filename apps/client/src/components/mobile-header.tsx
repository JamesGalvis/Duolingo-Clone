import { MobileSidebar } from '@/components/mobile-sidebar'

export function MobileHeader() {
  return (
    <div className="fixed lg:hidden px-6 h-[50px] flex items-center border-b top-0 w-full z-50">
      <MobileSidebar />
    </div>
  )
}
