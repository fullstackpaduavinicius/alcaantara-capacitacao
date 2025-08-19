import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import { Toaster } from 'react-hot-toast'

// Importa os botões flutuantes
import FloatingButtons from '../components/FloatingButtons'

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <Toaster position="bottom-right" />

      {/* Botões flutuantes */}
      <FloatingButtons />
    </div>
  )
}

export default Layout
