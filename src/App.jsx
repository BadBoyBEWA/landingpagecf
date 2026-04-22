import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Form from './pages/Form'
import Checkout from './pages/Checkout'
import About from './pages/About'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/form" element={<Form />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  )
}

export default App

