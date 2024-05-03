import { sidebarItems } from '@/constants'
import { SidebarItem } from '@/components/sidebar-item'

export function MobileFooterNav() {
  return (
    <div className="fixed bottom-0 h-[80px] w-full md:hidden flex items-center justify-evenly border-t-2 bg-white dark:bg-background">
      {sidebarItems.map(({ iconSrc, href, tooltipLabel }) => (
        <SidebarItem
          key={href}
          href={href}
          iconSrc={iconSrc}
          tooltipeLabel={tooltipLabel}
          tooltipSide="top"
          size="icon"
        />
      ))}
    </div>
  )
}
