import SideNav from './components/SideNav'
import TopBar from './components/TopBar'
import Routes from './routes'
import Dashboard from './pages/Dashboard'

function App () {
  return (
    <body className='flex bg-gray-100 min-h-screen'>
      <SideNav />
      <div className='flex-grow text-gray-800'>
        <TopBar />
        <main className='p-6 sm:p-10 space-y-6'>
          <Routes />
        </main>
      </div>
    </body>
  )
}

export default App
