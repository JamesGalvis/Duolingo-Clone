import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex text-[17px] items-center justify-center whitespace-nowrap rounded-xl font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 uppercase tracking-wide',
  {
    variants: {
      variant: {
        default:
          'bg-white border-slate-200 border-2 border-b-4 active:border-b-2 hover:bg-slate-100 dark:hover:bg-slate-400 text-slate-500',
        primary:
          'bg-sky-400 text-primary-foreground hover:bg-sky-400/90 border-sky-500 border-b-4 active:border-b-0',
        primaryOutline:
          'bg-white dark:bg-transparent dark:border-border text-sky-400 hover:bg-slate-100 border-slate-200 border-2 border-b-4 active:border-b-2',
        secondary:
          'bg-[#58CC02] text-primary-foreground hover:bg-[#58CC02]/90 border-[#46a302] dark:text-white border-b-4 active:border-b-0',
        secondaryOutline: 'bg-white text-[#58CC02] hover:bg-slate-100',
        danger:
          'bg-rose-500 text-primary-foreground hover:bg-rose-500/90 border-rose-600 border-b-4 active:border-b-0',
        dangerOutline: 'bg-white text-rose-500 hover:bg-slate-100',
        super:
          'bg-indigo-500 text-primary-foreground hover:bg-indigo-500/90 border-indigo-600 border-b-4 active:border-b-0',
        superOutline: 'bg-white text-indigo-500 hover:bg-slate-100',
        ghost:
          'bg-transparent text-slate-500 border-transparent border-0 hover:bg-slate-100 dark:hover:bg-[#202f36]',
        sidebar:
          'bg-transparent text-slate-500 dark:text-[#DCE6EC] border-2 border-transparent hover:bg-slate-100 dark:hover:bg-[#202f36] transition-none',
        sidebarOutline:
          'bg-sky-500/15 text-sky-400 border-sky-300 border-2 hover:bg-sky-500/20  transition-none',
        locked:
          'bg-neutral-200 dark:bg-[#37464f] dark:border-[#2c383f] text-primary-foreground hover:bg-neutral-200/90 border-neutral-400 border-b-4 active: border-b-0',
      },
      size: {
        default: 'h-11 px-4 py-2',
        sm: 'h-9 px-3',
        lg: 'h-12 px-8',
        icon: 'h-10 w-10 p-2',
        rounded: 'rounded-full',
        full: 'h-full px-4 py-2',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
