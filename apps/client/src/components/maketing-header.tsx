import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/clerk-react'
import { Loader } from 'lucide-react'

import { Button } from '@/components/ui/button'

export function Header() {
  return (
    <header className="h-20 border-b-2 border-slate-200 px-4">
      <div className="lg:max-w-screen-lg mx-auto flex items-center sm:justify-between justify-center h-full">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <img
            alt="Logo"
            src="/icons/Duolingo_landscape.svg"
            height={42}
            width={172}
          />
        </div>
        <div className="max-sm:hidden">
          <ClerkLoading>
            <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
          </ClerkLoading>

          <ClerkLoaded>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>

            <SignedOut>
              <SignInButton mode="modal" fallbackRedirectUrl="/learn">
                <Button size="lg" variant="secondary">
                  Start now
                </Button>
              </SignInButton>
            </SignedOut>
          </ClerkLoaded>
        </div>
      </div>
    </header>
  )
}
