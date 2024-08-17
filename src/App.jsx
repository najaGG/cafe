import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Cafe from './components/cafehead/Cafe'

import Pagehot from './components/page/Pagehot';
import Pageice from './components/page/Pageice';
import Pagecake from './components/page/Pagecake';
import Pagecast from './components/page/Pagecast';
import Register from './components/register/Register';
function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Pagehot />} />
        <Route path="/ice" element={<Pageice />} />
        <Route path="/cake" element={<Pagecake />} />
        <Route path="/cast" element={<Pagecast />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>

  )
}

export default App
