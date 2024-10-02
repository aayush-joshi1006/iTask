import NavBar from './componets/NavBar'
import Content from './componets/Content'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import About from './componets/About'
import { useState,useEffect } from 'react'

function App() {
  
  const [darkMode, setDarkMode] = useState(false)

    const updateDarkMode=(darkMode) => {
      setDarkMode(darkMode)
    }

    useEffect(() => {
      if(darkMode){
        document.documentElement.classList.add('dark')
      }
      else{
        document.documentElement.classList.remove('dark')
      }
    }, [darkMode])

  const router=createBrowserRouter([
    {
      path:"/",
      element:<><NavBar darkMode={darkMode} updateDarkMode={updateDarkMode} /><Content/></>
    },
    {
      path:"/about",
      element:<><NavBar darkMode={darkMode} updateDarkMode={updateDarkMode}/><About/></>
    }
  ])

  



  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
