import SideNav from './components/SideNav'
import TopBar from './components/TopBar'
import Routes from './routes'
import Dashboard from './pages/Dashboard'
import { BrowserRouter } from 'react-router-dom'

function App () {
  return (
    <body className='flex bg-gray-100 min-h-screen'>
    <BrowserRouter>
      <SideNav />
      <div className='flex-grow text-gray-800'>
        <TopBar />
        <main className='p-6 sm:p-10 space-y-6'>
          <Routes />
        </main>
      </div>
    </BrowserRouter>

    </body>
  )
}

export default App
