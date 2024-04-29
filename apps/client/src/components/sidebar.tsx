import { cn } from '@/lib/utils'

interface SidebarProps {
  className?: string
}

export function Sidebar({ className }: SidebarProps) {
  return (
    <div
      className={cn(
        'lg:fixed flex flex-col lg:w-[256px] h-full left-0 top-0 px-4 lg:border-r-2',
        className
      )}
    >
      Sidebar
    </div>
  )
}
