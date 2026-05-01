import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Administration from './pages/Administration'
import Vision from './pages/Vision'
import Contact from './pages/Contact'
import Feedback from './pages/Feedback'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/"              element={<Home />} />
          <Route path="/about"         element={<About />} />
          <Route path="/administration" element={<Administration />} />
          <Route path="/vision"        element={<Vision />} />
          <Route path="/contact"       element={<Contact />} />
          <Route path="/feedback"      element={<Feedback />} />
          {/* Catch-all → Home */}
          <Route path="*"              element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}