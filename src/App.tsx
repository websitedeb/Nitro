import './App.scss'
import { HashRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={null} />
      </Routes>
    </HashRouter>
  )
}

export default App
