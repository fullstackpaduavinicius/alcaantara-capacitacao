import { FaWhatsapp, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { Button } from '@/components/ui/Button'
import { NavLink } from 'react-router-dom' // ou Link, dependendo do seu roteador

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const navigation = [
    { name: 'Início', to: '/' },
    { name: 'Sobre', to: '/sobre' },
    { name: 'Cursos', to: '/cursos' },
    { name: 'Contato', to: '/contato' },
  ]

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="/images/logo-white.png" 
                alt="Alcaântara Capacitação" 
                className="h-10"
              />
              <span className="ml-3 text-xl font-serif font-bold text-white">
                Alcaântara Capacitação
              </span>
            </div>
            <p className="text-gray-300 mb-4">
              Contribuindo para o fortalecimento da gestão pública através da capacitação de servidores e gestores.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <FaInstagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <NavLink 
                    to={item.to} 
                    className="text-gray-300 hover:text-white"
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaWhatsapp className="h-5 w-5 mt-1 flex-shrink-0 text-green-400" />
                <a href="https://wa.me/5579988187788" className="ml-2 text-gray-300 hover:text-white">
                  (79) 98818-7788
                </a>
              </li>
              <li className="flex items-start">
                <MdEmail className="h-5 w-5 mt-1 flex-shrink-0 text-blue-300" />
                <a href="mailto:marcusalcantara@gmail.com" className="ml-2 text-gray-300 hover:text-white">
                  marcus@alcantara.com
                </a>
              </li>
            </ul>
            <Button variant="primary" size="sm" className="mt-4" asChild>
              <a href="/contato">
                Solicitar Proposta
              </a>
            </Button>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-gray-400">
          <p>&copy; {currentYear} ALCAÂNTARA CAPACITAÇÃO E EVENTOS LTDA. Todos os direitos reservados.</p>
          <p className="mt-1 text-sm">CNPJ: 12.575.826/0001-68</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
