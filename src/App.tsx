import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/homePage'
import LoginPage from './Pages/loginPage'

function App() {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />
    },
    {
      path: '/login',
      element: <LoginPage />
    }
  ])

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  )
}

export default App
