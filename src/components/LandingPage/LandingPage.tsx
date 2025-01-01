import { useEffect, useRef } from 'react'
import './LandingPage.css'
import { useNavigate } from 'react-router-dom'

interface LandingPageProps {
  onGetStarted: () => void;
}

export const LandingPage = ({ onGetStarted }: LandingPageProps) => {
  const navigate = useNavigate()

  const handleGetStarted = () => {
    onGetStarted()
    navigate('/upload')
  }

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              <span className="gradient-text">Один клик</span>
              <br />для публикации везде
            </h1>
            <p className="hero-description">
              Загружайте видео один раз и публикуйте на все популярные площадки автоматически. 
              Экономьте время и сосредоточьтесь на создании контента.
            </p>
          </div>
          <div className="hero-actions">
            <button className="cta-button primary" onClick={handleGetStarted}>
              Попробовать бесплатно
              <span className="button-arrow">→</span>
            </button>
            <button className="cta-button secondary">
              Смотреть демо
              <span className="play-icon">▶</span>
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="platform-cards">
            <div className="platform-card vk">
              <img src="/vk-logo.svg" alt="VK Video" />
            </div>
            <div className="platform-card rutube">
              <img src="/rutube-logo.svg" alt="Rutube" />
            </div>
            <div className="platform-card dzen">
              <img src="/dzen-logo.svg" alt="Дзен" />
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="workflow-section">
        <div className="workflow-steps">
          <div className="workflow-step">
            <div className="step-icon upload"></div>
            <div className="step-content">
              <span className="step-number">01</span>
              <h3>Загрузите видео</h3>
              <p>Перетащите файл или выберите с компьютера</p>
            </div>
          </div>
          <div className="workflow-step">
            <div className="step-icon customize"></div>
            <div className="step-content">
              <span className="step-number">02</span>
              <h3>Настройте публикацию</h3>
              <p>Добавьте заголовок и описание один раз</p>
            </div>
          </div>
          <div className="workflow-step">
            <div className="step-icon publish"></div>
            <div className="step-content">
              <span className="step-number">03</span>
              <h3>Опубликуйте везде</h3>
              <p>Нажмите кнопку и видео появится на всех платформах</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="features-preview">
        <div className="feature-card">
          <div className="feature-content">
            <h2>Автоматическая публикация</h2>
            <p>Настройте один раз и публикуйте везде одним кликом</p>
            <ul className="feature-list">
              <li>Поддержка всех популярных платформ</li>
              <li>Автоматическая оптимизация для каждой площадки</li>
              <li>Планирование публикаций</li>
            </ul>
          </div>
          <div className="feature-visual">
            <img src="/feature-publish.png" alt="Publishing Feature" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Начните публиковать эффективнее</h2>
          <p>Присоединяйтесь к авторам, которые уже оптимизировали свой процесс публикации</p>
          <button className="cta-button primary" onClick={handleGetStarted}>
            Начать бесплатно
            <span className="button-arrow">→</span>
          </button>
        </div>
      </section>
    </div>
  )
} 