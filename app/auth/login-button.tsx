import { useAuth0 } from '@auth0/auth0-react'

function LoginButton() {
  const { isAuthenticated, loginWithRedirect } = useAuth0()

  if (!isAuthenticated)
    return <button onClick={loginWithRedirect}>Log in</button>
  else return null
}

export default LoginButton
