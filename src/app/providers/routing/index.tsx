import { HomePage } from '@pages/home'
import { LoginPage } from '@pages/login'

export function Routing() {
  const path = window.location.pathname

  if (path === '/login') return <LoginPage />
  return <HomePage />
}
