import { useState } from 'react'
import './UploadPage.css'

export const UploadPage = () => {
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([])
  const [useCommonTitle, setUseCommonTitle] = useState(true)
  const [isPublic, setIsPublic] = useState(true)

  const platforms = [
    { id: 'vk', name: 'VK Video' },
    { id: 'rutube', name: 'Rutube' },
    { id: 'dzen', name: 'Дзен' }
  ]

  const togglePlatform = (platformId: string) => {
    setSelectedPlatforms(prev => 
      prev.includes(platformId) 
        ? prev.filter(id => id !== platformId)
        : [...prev, platformId]
    )
  }

  return (
    <div className="upload-page">
      <div className="upload-section">
        <div className="upload-section-headers">
          <div className="upload-header">
            <h3>Загрузка видео</h3>
            <div className="upload-area">
              <span className="upload-icon">↑</span>
              <p className="upload-text">Перетащите видео сюда или нажмите для выбора файла</p>
              <button className="upload-button">Выбрать файл</button>
              <input type="file" className="upload-input" accept="video/*" />
            </div>
          </div>
          <div className="header-spacer"></div>
          <div className="platforms-header">
            <h3>Выберите платформы</h3>
            <div className="platform-list">
              {platforms.map(platform => (
                <div
                  key={platform.id}
                  className={`platform-item ${selectedPlatforms.includes(platform.id) ? 'selected' : ''}`}
                  onClick={() => togglePlatform(platform.id)}
                >
                  <img 
                    src={`/${platform.id}-logo.svg`} 
                    alt={platform.name}
                    className="platform-icon"
                  />
                  <span className="platform-name">{platform.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {selectedPlatforms.length > 0 && (
        <div className="details-section">
          <h3>Описание видео</h3>
          <div className="details-form">
            <div className="form-group">
              <div className="form-header">
                <label htmlFor="title">Заголовок</label>
              </div>
              <label className="checkbox-label">
                <input 
                  type="checkbox" 
                  className="checkbox-input"
                  checked={useCommonTitle}
                  onChange={(e) => setUseCommonTitle(e.target.checked)} 
                />
                <span>Использовать общий заголовок</span>
              </label>
              {!useCommonTitle && selectedPlatforms.map(platform => (
                <input 
                  key={platform}
                  type="text" 
                  placeholder={`Заголовок для ${platforms.find(p => p.id === platform)?.name}`}
                  className="form-input platform-input"
                />
              ))}
            </div>

            <div className="form-group">
              <div className="form-header">
                <label>Настройки доступа</label>
              </div>
              <label className="checkbox-label">
                <input 
                  type="checkbox" 
                  className="checkbox-input"
                  checked={isPublic}
                  onChange={(e) => setIsPublic(e.target.checked)}
                />
                <span>Публичное видео</span>
              </label>
            </div>

            <div className="form-group">
              <label htmlFor="description">Описание</label>
              <textarea 
                id="description" 
                placeholder="Введите описание видео"
                className="form-input"
                rows={4}
              />
            </div>

            <div className="form-group">
              <label htmlFor="tags">Теги</label>
              <input 
                type="text" 
                id="tags" 
                placeholder="Введите теги через запятую"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label>Превью</label>
              <div className="thumbnail-upload">
                <button className="upload-button">Загрузить превью</button>
                <p className="thumbnail-hint">Рекомендуемый размер: 1280x720</p>
              </div>
            </div>

            <div className="form-actions">
              <button className="publish-button">
                Опубликовать
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 