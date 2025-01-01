import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { SunIcon, MoonIcon } from '../Icons/ThemeIcons'
import { UserIcon, SettingsIcon, LogoutIcon } from '../Icons/MenuIcons'
import './Header.css'

export const Header = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme')
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      return savedTheme === 'dark' || (!savedTheme && prefersDark)
    }
    return false
  })
  
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const location = useLocation()
  const [user, setUser] = useState<{ name: string; avatar?: string } | null>({ name: 'Александр' })

  // Обработчик клика вне меню
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen && 
        menuRef.current && 
        buttonRef.current && 
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isMenuOpen])

  useEffect(() => {
    const root = document.documentElement
    root.setAttribute('data-theme', isDarkTheme ? 'dark' : 'light')
    localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light')

    // Добавляем плавный переход при смене темы
    root.style.setProperty('--transition-duration', '0.3s')
    return () => {
      root.style.removeProperty('--transition-duration')
    }
  }, [isDarkTheme])

  // Слушаем системные изменения темы
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) {
        setIsDarkTheme(e.matches)
      }
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return (
    <header className="header">
      <div className="header-content">
        <h1 className="site-title">Video Publisher</h1>

        <nav className="nav-menu">
          <Link 
            to="/videos" 
            className={`nav-link ${location.pathname === '/videos' ? 'active' : ''}`}
          >
            Мои видео
            {location.pathname === '/videos' && <span className="nav-indicator" />}
          </Link>
          <Link 
            to="/upload"
            className={`nav-link ${location.pathname === '/upload' ? 'active' : ''}`}
          >
            Загрузить
            {location.pathname === '/upload' && <span className="nav-indicator" />}
          </Link>
        </nav>

        <div className="header-actions">
          <button 
            className="theme-toggle"
            onClick={() => setIsDarkTheme(prev => !prev)}
            aria-label={isDarkTheme ? 'Включить светлую тему' : 'Включить тёмную тему'}
          >
            {isDarkTheme ? <SunIcon /> : <MoonIcon />}
          </button>

          {user ? (
            <div className="user-menu">
              <button 
                ref={buttonRef}
                className="user-button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Меню пользователя"
              >
                <span className="user-avatar">
                  {user.avatar ? (
                    <img src={user.avatar} alt="" />
                  ) : (
                    <span>{user.name[0].toUpperCase()}</span>
                  )}
                </span>
              </button>

              {isMenuOpen && (
                <div ref={menuRef} className="user-dropdown">
                  <div className="dropdown-header">
                    <span className="user-avatar large">
                      {user.avatar ? (
                        <img src={user.avatar} alt="" />
                      ) : (
                        <span>{user.name[0].toUpperCase()}</span>
                      )}
                    </span>
                    <div className="user-info">
                      <span className="user-name">{user.name}</span>
                      <span className="user-email">user@example.com</span>
                    </div>
                  </div>
                  <nav className="dropdown-nav">
                    <Link to="/profile" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>
                      <UserIcon />
                      <span>Профиль</span>
                    </Link>
                    <Link to="/settings" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>
                      <SettingsIcon />
                      <span>Настройки</span>
                    </Link>
                    <button 
                      onClick={() => {
                        setUser(null)
                        setIsMenuOpen(false)
                      }} 
                      className="dropdown-item logout"
                    >
                      <LogoutIcon />
                      <span>Выйти</span>
                    </button>
                  </nav>
                </div>
              )}
            </div>
          ) : (
            <button 
              className="login-button" 
              onClick={() => setUser({ name: 'Александр' })}
            >
              Войти
            </button>
          )}
        </div>
      </div>
    </header>
  )
} 