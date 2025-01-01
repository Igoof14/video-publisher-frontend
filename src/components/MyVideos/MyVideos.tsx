import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './MyVideos.css'
import { Video, FilterBy, SortBy } from '../../types/video'
import { PLATFORMS, VIDEO_STATUS } from '../../types/constants'

const testVideos: Video[] = [
  {
    id: '1',
    title: 'Как я создал свой первый проект на React',
    thumbnail: 'https://i.ytimg.com/vi/GNrdg3PzpJQ/maxresdefault.jpg',
    date: '2024-02-15',
    platforms: ['vk', 'rutube', 'dzen'],
    views: {
      vk: 1200,
      rutube: 850,
      dzen: 2300
    },
    status: 'published'
  },
  // ... остальные видео ...
]

const ITEMS_PER_PAGE = 6

export const MyVideos = () => {
  const navigate = useNavigate()
  const [filter, setFilter] = useState<FilterBy>('all')
  const [sortBy, setSortBy] = useState<SortBy>('date')
  const [currentPage, setCurrentPage] = useState(1)

  const filteredVideos = testVideos
    .filter(video => {
      if (filter === 'all') return true
      return video.platforms.includes(filter)
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'date':
          return new Date(b.date).getTime() - new Date(a.date).getTime()
        case 'views':
          const aViews = Object.values(a.views).reduce((sum, v) => sum + v, 0)
          const bViews = Object.values(b.views).reduce((sum, v) => sum + v, 0)
          return bViews - aViews
        case 'title':
          return a.title.localeCompare(b.title)
        default:
          return 0
      }
    })

  const totalPages = Math.ceil(filteredVideos.length / ITEMS_PER_PAGE)
  const paginatedVideos = filteredVideos.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

  const handleUploadClick = () => {
    navigate('/upload')
  }

  return (
    <div className="my-videos">
      <div className="videos-header">
        <h1>Мои видео</h1>
        <div className="videos-controls">
          <div className="filter-group">
            <select 
              value={filter} 
              onChange={(e) => setFilter(e.target.value)}
              className="filter-select"
            >
              <option value="all">Все платформы</option>
              <option value="vk">VK Video</option>
              <option value="rutube">Rutube</option>
              <option value="dzen">Дзен</option>
            </select>
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="filter-select"
            >
              <option value="date">По дате</option>
              <option value="views">По просмотрам</option>
              <option value="title">По названию</option>
            </select>
          </div>
          <button className="upload-button" onClick={handleUploadClick}>
            <div className="button-content">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" y1="3" x2="12" y2="15" />
              </svg>
              <span>Загрузить</span>
            </div>
          </button>
        </div>
      </div>

      <div className="videos-grid">
        {paginatedVideos.map(video => (
          <div key={video.id} className="video-card">
            <div className="video-thumbnail">
              <img src={video.thumbnail} alt={video.title} />
              <div className={`video-status ${video.status}`}>
                {video.status === 'published' && 'Опубликовано'}
                {video.status === 'processing' && 'Обработка'}
                {video.status === 'scheduled' && 'Запланировано'}
              </div>
            </div>
            <div className="video-info">
              <h3>{video.title}</h3>
              <div className="video-meta">
                <div className="video-date">
                  {new Date(video.date).toLocaleDateString()}
                </div>
                <div className="video-platforms">
                  {video.platforms.map(platform => (
                    <div key={platform} className="platform-badge">
                      {platform === 'vk' ? 'VK' : platform === 'rutube' ? 'RT' : 'DZ'}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="pagination">
          <button 
            className="page-button"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(p => p - 1)}
          >
            Назад
          </button>
          
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
            <button
              key={page}
              className={`page-button ${currentPage === page ? 'active' : ''}`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          ))}
          
          <button 
            className="page-button"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(p => p + 1)}
          >
            Вперед
          </button>
        </div>
      )}
    </div>
  )
} 