import './Footer.css'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>О сервисе</h3>
          <p>Video Publisher - удобный инструмент для публикации видео на популярных российских платформах.</p>
        </div>

        <div className="footer-section">
          <h3>Платформы</h3>
          <ul>
            <li><a href="https://vkvideo.ru" target="_blank" rel="noopener noreferrer">VK Video</a></li>
            <li><a href="https://rutube.ru" target="_blank" rel="noopener noreferrer">Rutube</a></li>
            <li><a href="https://dzen.ru/video" target="_blank" rel="noopener noreferrer">Дзен</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Поддержка</h3>
          <ul>
            <li><a href="#">Руководство пользователя</a></li>
            <li><a href="#">Часто задаваемые вопросы</a></li>
            <li><a href="#">Техническая поддержка</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Контакты</h3>
          <ul>
            <li><a href="mailto:support@videopublisher.ru">support@videopublisher.ru</a></li>
            <li><a href="https://t.me/videopublisher" target="_blank" rel="noopener noreferrer">Telegram</a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; {currentYear} Видео Паблишер. Все права защищены.</p>
          <div className="footer-links">
            <a href="#">Условия использования</a>
            <a href="#">Политика конфиденциальности</a>
          </div>
        </div>
      </div>
    </footer>
  )
} 