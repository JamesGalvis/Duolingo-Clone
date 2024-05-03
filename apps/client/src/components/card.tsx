import { Check } from 'lucide-react'

import { cn } from '@/lib/utils'

interface CardProps {
  id: string
  title: string
  imageSrc: string
  onClick: (id: string) => void
  disabled: boolean
  isActive: boolean
}

export function Card({
  isActive,
  disabled,
  id,
  imageSrc,
  onClick,
  title,
}: CardProps) {
  return (
    <div
      onClick={() => onClick(id)}
      className={cn(
        'h-full border-2 rounded-xl border-b-4 hover:bg-black/5 dark:hover:bg-[#0f191d] cursor-pointer active:border-b-2 flex flex-col items-center justify-between p-3 pb-6 min-h-[217px] min-w-[200px]',
        disabled && 'pointer-events-none opacity-50'
      )}
    >
      <div className="min-[24px] w-full flex items-center justify-end">
        {isActive && (
          <div className="rounded-full bg-sky-400 flex items-center justify-center p-1.5">
            <Check className="text-white stroke-[4] h-4 w-4" />
          </div>
        )}
      </div>
      <img
        src={imageSrc}
        alt={title}
        height={70}
        width={93.33}
        className="rounded-[19px] drop-shadow-md border-4 border-[#f1f7fb] object-cover pointer-events-none"
      />
      <p className="text-neutral-700 dark:text-[#f1f7fb] text-center font-bold mt-3 pointer-events-none">
        {title}
      </p>
    </div>
  )
}
