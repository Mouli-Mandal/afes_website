import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Administration from './pages/Administration'
import Vision from './pages/Vision'
import Contact from './pages/Contact'
import Feedback from './pages/Feedback'
import Students from './pages/Students'
import Faculty  from './pages/Faculty'
import Visitors from './pages/Visitors'
import Alumni   from './pages/Alumni'
import Search   from './pages/Search'

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
          <Route path="/students"      element={<Students />} />
          <Route path="/faculty"       element={<Faculty />} />
          <Route path="/visitors"      element={<Visitors />} />
          <Route path="/alumni"        element={<Alumni />} />
          <Route path="/search"        element={<Search />} />
          {/* Catch-all → Home */}
          <Route path="*"              element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}