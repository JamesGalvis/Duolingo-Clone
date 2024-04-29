import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
} from '@clerk/clerk-react'
import { Loader } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'

export function Marketing() {
  return (
    <div className="max-w-[980px] mx-auto flex-1 flex lg:flex-row flex-col items-center justify-center gap-6">
      <div className="flex-1 relative min-w-[240px] min-h-[240px] lg:min-w-[424px] lg:min-h-[424px] max-lg:mb-8">
        <img
          alt="Hero"
          src="/images/hero2.svg"
          className="w-full h-full shrink-0"
        />
      </div>
      <div className="flex-1 max-lg:w-[78%] max-md:w-full flex flex-col items-center gap-y-8">
        <h1 className="text-[32px] text-[#4B4B4B] font-bold text-center">
          ¡The fun, effective and free way to learn a language!
        </h1>
        <div className="max-w-[380px] space-y-3 px-6">
          <ClerkLoading>
            <Loader className="h-5 w-5 text-muted-foreground animate-spin mx-auto" />
          </ClerkLoading>

          <ClerkLoaded>
            <SignedOut>
              <SignUpButton
                mode="modal"
                fallbackRedirectUrl="/learn"
                signInForceRedirectUrl="/learn"
                forceRedirectUrl="/learn"
              >
                <Button
                  size="lg"
                  variant="secondary"
                  className="w-full text-md h-14"
                >
                  Start now
                </Button>
              </SignUpButton>
              <SignInButton mode="modal" fallbackRedirectUrl="/learn">
                <Button
                  size="lg"
                  variant="primaryOutline"
                  className="w-full text-md h-14"
                >
                  I already have an account
                </Button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <Button
                size="lg"
                variant="primaryOutline"
                className="text-md h-14"
              >
                <Link to="/learn">Continue Learning</Link>
              </Button>
            </SignedIn>
          </ClerkLoaded>
        </div>
      </div>
    </div>
  )
}
