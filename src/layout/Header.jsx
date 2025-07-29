import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Button } from '@/components/ui/Button'

const navigation = [
  { name: 'Início', to: '/' },
  { name: 'Sobre Nós', to: '/sobre' },
  { name: 'Serviços', to: '/servicos' },
  { name: 'Blog', to: '/blog' },
  { name: 'Contato', to: '/contato' },
]

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <NavLink to="/" className="flex items-center">
            <img 
              src="/images/logo.png" 
              alt="Alcaântara Capacitação" 
              className="h-12"
            />
            <span className="ml-3 text-xl font-serif font-bold text-primary-600">
              Alcaântara Capacitação
            </span>
          </NavLink>

          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.to}
                className={({ isActive }) => 
                  `px-3 py-2 font-medium text-sm ${isActive ? 'text-primary-600 border-b-2 border-primary-600' : 'text-gray-700 hover:text-primary-500'}`
                }
              >
                {item.name}
              </NavLink>
            ))}
            <Button variant="secondary" size="sm" asChild>
              <NavLink to="/contato">
                Fale Conosco
              </NavLink>
            </Button>
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-700"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="space-y-2">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) => 
                    `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-primary-50 text-primary-600' : 'text-gray-700 hover:bg-gray-50'}`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header