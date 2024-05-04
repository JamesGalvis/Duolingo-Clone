import { flags } from '@/constants'
import { Button } from './ui/button'

export function Footer() {
  return (
    <div className="hidden lg:block h-20 border-t-2 border-slate-200 dark:border-border p-2">
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        {flags.map(({ alt, label, src }) => (
          <Button
            key={label}
            size="lg"
            variant="ghost"
            className="w-full gap-3"
          >
            <img src={src} alt={alt} />
            {label}
          </Button>
        ))}
      </div>
    </div>
  )
}
