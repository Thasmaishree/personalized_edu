import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Tutor from './pages/Tutor'
import CodeTool from './pages/CodeTool'
import MockInterview from './pages/MockInterview'

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tutor" element={<Tutor />} />
          <Route path="/code" element={<CodeTool />} />
          <Route path="/mock" element={<MockInterview />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App