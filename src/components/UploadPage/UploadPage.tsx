import { useState } from 'react'
import './UploadPage.css'


export const UploadPage = () => {
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([])
  const [useCommonTitle, setUseCommonTitle] = useState(true)
  const [isPublic, setIsPublic] = useState(true)
  const [isKidsContent, setIsKidsContent] = useState(false)
  const [ageRestriction, setAgeRestriction] = useState<'0+' | '6+' | '12+' | '16+' | '18+'>('0+')
  const [commonTitle, setCommonTitle] = useState('')
  const [platformTitles, setPlatformTitles] = useState<Record<string, string>>({})
  const [dragActive, setDragActive] = useState(false)
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [uploadProgress, setUploadProgress] = useState(0)

  const MAX_TITLE_LENGTH = 100

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

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    const file = e.dataTransfer.files?.[0]
    if (file && file.type.startsWith('video/')) {
      handleFile(file)
    }
  }

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      handleFile(file)
    }
  }

  const handleFile = (file: File) => {
    setUploadedFile(file)
    // Имитация загрузки
    setUploadProgress(0)
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 10
      })
    }, 500)
  }

  return (
    <div className="upload-page">
      <div className="upload-section">
        <div className="upload-section-headers">
          <div className="upload-header">
            <h3>Загрузка видео</h3>
            <div 
              className={`upload-area ${dragActive ? 'dragging' : ''} ${uploadedFile ? 'has-file' : ''}`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              {!uploadedFile ? (
                <>
                  <span className="upload-icon">↑</span>
                  <p className="upload-text">
                    Перетащите видео сюда или нажмите для выбора файла
                  </p>
                  <button 
                    className="upload-button"
                    onClick={() => document.getElementById('file-input')?.click()}
                  >
                    Выбрать файл
                  </button>
                  <input 
                    id="file-input"
                    type="file" 
                    className="upload-input" 
                    accept="video/*"
                    onChange={handleFileInput}
                  />
                </>
              ) : (
                <div className="upload-progress">
                  <div className="file-info">
                    <div className="file-details">
                      <span className="file-name">{uploadedFile.name}</span>
                      <span className="file-size">
                        {(uploadedFile.size / (1024 * 1024)).toFixed(2)} MB
                      </span>
                    </div>
                  </div>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill"
                      style={{ width: `${uploadProgress}%` }}
                    />
                  </div>
                  {uploadProgress === 100 && (
                    <div className="upload-success">
                      <span>Загрузка завершена</span>
                    </div>
                  )}
                </div>
              )}
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
                <div className="toggle-wrapper">
                  <span className="toggle-label">Использовать общий заголовок</span>
                  <label className="toggle-switch">
                    <input 
                      type="checkbox"
                      checked={useCommonTitle}
                      onChange={(e) => setUseCommonTitle(e.target.checked)}
                    />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
              </div>
              {useCommonTitle ? (
                <div className="title-input-wrapper">
                  <input 
                    type="text"
                    value={commonTitle}
                    onChange={(e) => setCommonTitle(e.target.value.slice(0, MAX_TITLE_LENGTH))}
                    placeholder="Введите общий заголовок"
                    className={`form-input ${commonTitle.length === MAX_TITLE_LENGTH ? 'max-length' : ''}`}
                  />
                  <span className="title-counter">
                    <span className={commonTitle.length === MAX_TITLE_LENGTH ? 'max-length' : ''}>
                      {commonTitle.length}
                    </span>
                    /{MAX_TITLE_LENGTH}
                  </span>
                </div>
              ) : (
                selectedPlatforms.map(platform => (
                  <div key={platform} className="title-input-wrapper">
                    <input 
                      type="text"
                      value={platformTitles[platform] || ''}
                      onChange={(e) => setPlatformTitles(prev => ({
                        ...prev,
                        [platform]: e.target.value.slice(0, MAX_TITLE_LENGTH)
                      }))}
                      placeholder={`Заголовок для ${platforms.find(p => p.id === platform)?.name}`}
                      className={`form-input platform-input ${
                        (platformTitles[platform]?.length || 0) === MAX_TITLE_LENGTH ? 'max-length' : ''
                      }`}
                    />
                    <span className="title-counter">
                      <span className={(platformTitles[platform]?.length || 0) === MAX_TITLE_LENGTH ? 'max-length' : ''}>
                        {platformTitles[platform]?.length || 0}
                      </span>
                      /{MAX_TITLE_LENGTH}
                    </span>
                  </div>
                ))
              )}
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
              <div className="form-header">
                <label>Настройки доступа</label>
              </div>
              <div className="access-cards">
                <div className="access-card">
                  <div className="access-title">Доступ к видео</div>
                  <div className="access-options">
                    <div 
                      className={`access-option ${isPublic ? 'active' : ''}`}
                      onClick={() => setIsPublic(true)}
                    >
                      <span className="option-title">Публичное</span>
                      <span className="option-description">Видео доступно всем</span>
                    </div>
                    <div 
                      className={`access-option ${!isPublic ? 'active' : ''}`}
                      onClick={() => setIsPublic(false)}
                    >
                      <span className="option-title">По ссылке</span>
                      <span className="option-description">Доступ только по ссылке</span>
                    </div>
                  </div>
                </div>

                <div className="access-card">
                  <div className="access-title">Возрастной контент</div>
                  <div className="access-options">
                    <div 
                      className={`access-option ${ageRestriction !== '18+' ? 'active' : ''}`}
                      onClick={() => setAgeRestriction('0+')}
                    >
                      <span className="option-title">Без ограничений</span>
                      <span className="option-description">Подходит для всех возрастов</span>
                    </div>
                    <div 
                      className={`access-option ${ageRestriction === '18+' ? 'active' : ''}`}
                      onClick={() => setAgeRestriction('18+')}
                    >
                      <span className="option-title">18+</span>
                      <span className="option-description">Контент для взрослых</span>
                    </div>
                  </div>
                </div>

                <div className="access-card">
                  <div className="access-title">Тип контента</div>
                  <div className="access-options">
                    <div 
                      className={`access-option ${!isKidsContent ? 'active' : ''}`}
                      onClick={() => setIsKidsContent(false)}
                    >
                      <span className="option-title">Обычный</span>
                      <span className="option-description">Стандартный контент</span>
                    </div>
                    <div 
                      className={`access-option ${isKidsContent ? 'active' : ''}`}
                      onClick={() => setIsKidsContent(true)}
                    >
                      <span className="option-title">Детский</span>
                      <span className="option-description">Контент для детей</span>
                    </div>
                  </div>
                </div>
              </div>
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
              <label>Превью видео</label>
              <div className="preview-upload">
                <div className="preview-area">
                  <div className="preview-placeholder">
                    <span className="preview-icon">+</span>
                    <span className="preview-text">Загрузите или перетащите изображение</span>
                    <span className="preview-hint">JPG или PNG, рекомендуемый размер 1280×720</span>
                  </div>
                  <input 
                    type="file" 
                    className="preview-input" 
                    accept="image/jpeg,image/png"
                  />
                </div>
                <div className="preview-options">
                  <div className="preview-option">
                    <span className="option-time">00:00</span>
                    <span className="option-label">Автоматический скриншот</span>
                  </div>
                  <div className="preview-option">
                    <span className="option-time">01:23</span>
                    <span className="option-label">Ключевой момент</span>
                  </div>
                  <div className="preview-option">
                    <span className="option-time">02:45</span>
                    <span className="option-label">Яркий момент</span>
                  </div>
                </div>
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