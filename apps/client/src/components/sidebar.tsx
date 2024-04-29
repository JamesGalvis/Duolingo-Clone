import { Loader } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ClerkLoaded, ClerkLoading, UserButton } from '@clerk/clerk-react'

import { cn } from '@/lib/utils'
import { sidebarItems } from '@/constants'
import { SidebarItem } from '@/components/sidebar-item'

interface SidebarProps {
  className?: string
}

export function Sidebar({ className }: SidebarProps) {
  return (
    <div
      className={cn(
        'md:fixed flex flex-col xl:w-[256px] w-[88px] h-full left-0 top-0 px-4 md:border-r-2',
        className
      )}
    >
      <Link to="/learn">
        <div className="pt-8 xl:pl-4 pl-1 pb-7 flex items-center xl:gap-x-3">
          <img
            alt="Logo"
            src="/icons/duolingo_wordmark.svg"
            height={30}
            width={127.99}
            className="max-xl:hidden"
          />
          <img
            alt="Logo"
            src="/icons/duo-side-logo.svg"
            height={40}
            width={40}
            className="xl:hidden min-w-[40px] min-h-[40px]"
          />
        </div>
      </Link>
      <div className="flex-1 flex flex-col gap-y-2">
        {sidebarItems.map(({ href, iconSrc, label, tooltipLabel }) => (
          <SidebarItem
            iconSrc={iconSrc}
            href={href}
            label={label}
            tooltipeLabel={tooltipLabel}
          />
        ))}
      </div>
      <div className="flex items-center md:justify-center xl:justify-start p-4">
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton afterSignOutUrl="/" />
        </ClerkLoaded>
      </div>
    </div>
  )
}
