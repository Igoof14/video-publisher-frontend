import { createBrowserRouter } from 'react-router-dom'
import { Layout } from './components/Layout/Layout'
import { LandingPage } from './components/LandingPage/LandingPage'
import { UploadPage } from './components/UploadPage/UploadPage'
import { MyVideos } from './components/MyVideos/MyVideos'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <LandingPage onGetStarted={() => {}} />
      },
      {
        path: '/upload',
        element: <UploadPage />
      },
      {
        path: '/videos',
        element: <MyVideos />
      }
    ]
  }
]) 