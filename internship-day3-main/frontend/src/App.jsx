import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from '../components/Navbar'
import View from '../components/View'
import Add from '../components/Add'
import { Route,Routes} from 'react-router-dom'

function App() {
  //let appName="student;"
  const [appName, setAppName] = useState('productmanagement')

  return (
    <><h1>Welcome to {appName} project</h1>
    <br></br>
     <Navbar/>
     <Routes>
     <Route path='/' element={<View/>}></Route>
     <Route path='/add' element={<Add person={{"productName":"cake","Category":"sweet","productInformation":"abc","expireDate":"21/05/2024"}}/>}></Route>
      </Routes>
      </>
  )
}

export default App
 