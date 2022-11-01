import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

type Props = {
  children?: React.ReactNode
}

function Wrapper({ children }: Props): React.ReactNode {
  const { isLoading, error } = useAuth0()
  if (isLoading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Oops... {error.message}</div>
  }
  return <>{children}</>
}

export default Wrapper
