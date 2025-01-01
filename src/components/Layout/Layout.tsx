import { Outlet, useLocation } from 'react-router-dom'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'
import './Layout.css'

export const Layout = () => {
  const location = useLocation()
  const isLandingPage = location.pathname === '/'

  return (
    <div className="layout">
      {!isLandingPage && (
        <Header isLoggedIn={true} onLogin={() => {}} />
      )}
      <main className={`main ${isLandingPage ? 'landing' : ''}`}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
} 