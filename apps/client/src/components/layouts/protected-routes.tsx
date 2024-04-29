import { useAuth } from '@clerk/clerk-react'
import { Loader } from 'lucide-react'
import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

export function ProtectedRoutes() {
  const { isLoaded, userId } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (isLoaded && !userId) {
      navigate('/')
    }
  }, [isLoaded, navigate, userId])

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader className="h-6 w-6 text-muted-foreground animate-spin" />
      </div>
    )
  }

  return <Outlet />
}
