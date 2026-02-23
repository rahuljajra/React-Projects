import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Register from './components/register/Register'
import Login from './components/login/Login'
import Dashboard from './components/dashboard/Dashboard'

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
      </Routes>
    </>
  )
}

export default App
