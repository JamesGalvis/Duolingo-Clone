import { Loader as LoaderIcon } from 'lucide-react'

export function Loader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <LoaderIcon className="h-6 w-6 text-muted-foreground animate-spin" />
    </div>
  )
}
