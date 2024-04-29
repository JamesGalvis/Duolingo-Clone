import { Link, useLocation } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

interface SidebarItemProps {
  label?: string
  iconSrc: string
  href: string
  tooltipSide?: 'right' | 'top'
  tooltipeLabel: string
  size?: 'icon' | 'default'
}

export function SidebarItem({
  href,
  iconSrc,
  label,
  tooltipeLabel,
  tooltipSide = 'right',
  size = 'default',
}: SidebarItemProps) {
  const { pathname } = useLocation()
  const isActive = pathname === href

  return (
    <>
      <div className="lg:hidden">
        <TooltipProvider>
          <Tooltip delayDuration={10}>
            <TooltipTrigger asChild>
              <Button
                asChild
                size={size}
                variant={isActive ? 'sidebarOutline' : 'sidebar'}
                className="lg:justify-start h-[52px] w-full"
              >
                <Link to={href}>
                  <img
                    src={iconSrc}
                    alt={label}
                    className="lg:mr-5 md:min-w-[32px] md:min-h-[32px] min-w-[42px] min-h-[42px]"
                    height={32}
                    width={32}
                  />
                  <p className="hidden lg:block">{label}</p>
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent side={tooltipSide}>
              <p>{tooltipeLabel}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div className="max-lg:hidden">
        <Button
          asChild
          variant={isActive ? 'sidebarOutline' : 'sidebar'}
          className="lg:justify-start h-[52px] w-full"
        >
          <Link to={href}>
            <img
              src={iconSrc}
              alt={label}
              className="lg:mr-5 min-w-[32px] min-h-[32px]"
              height={32}
              width={32}
            />
            <p className="hidden lg:block">{label}</p>
          </Link>
        </Button>
      </div>
    </>
  )
}
