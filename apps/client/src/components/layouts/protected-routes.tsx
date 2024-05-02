import { useEffect } from 'react'
import { useAuth } from '@clerk/clerk-react'
import { Outlet, useNavigate } from 'react-router-dom'

import { Loader } from '@/components/loader'

export function ProtectedRoutes() {
  const { isLoaded, userId } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (isLoaded && !userId) {
      navigate('/')
    }
  }, [isLoaded, navigate, userId])

  if (!isLoaded) {
    return <Loader />
  }

  return <Outlet />
}
