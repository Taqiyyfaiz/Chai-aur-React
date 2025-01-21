import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from './appwrite/Auth'
import {login, logout} from './store/AuthSlice'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  // Jaise heen application load ho useeffect lo aur useeffect se pucho us service se loged in ho ya nai ho
  useEffect(() => {
    // Auth Serive se pucho aapka current user koun hai
    authService.getCurrentUser()
    .then((userData)=> {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  },[])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>Test
    <div className='w-full block'>
      <Header />
      <main>
        {/* outlet will come in react router dom */}
       todo: {/* <Outlet />  */}
      </main>
      <Footer />
    </div>
    </div>
  ) : null
}

export default App
