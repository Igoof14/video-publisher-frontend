import { createBrowserRouter } from 'react-router-dom'
import { MyVideos } from './components/MyVideos/MyVideos'
import { UploadPage } from './components/UploadPage/UploadPage'
import { LandingPage } from './components/LandingPage/LandingPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />
  },
  {
    path: '/videos',
    element: <MyVideos />
  },
  {
    path: '/upload',
    element: <UploadPage />
  }
]) 