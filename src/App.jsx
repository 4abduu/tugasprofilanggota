import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Abdu from './pages/Abdu'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/abdu" element={<Abdu />} />
    </Routes>
  )
}

export default App