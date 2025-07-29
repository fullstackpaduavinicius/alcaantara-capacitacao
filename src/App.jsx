import { Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="sobre" element={<About />} />
        <Route path="servicos" element={<Services />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contato" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
