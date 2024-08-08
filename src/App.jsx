import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/login/Login'
import Register from './components/register/Register';

function App() {

  return (
    <>
  
      <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Navigate to="/login" replace/>} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    
                  </Routes>
            </div>
        </Router>
    </>
  )
}

export default App
