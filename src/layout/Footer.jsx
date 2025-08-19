import { FaWhatsapp, FaLinkedin, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { Button } from '@/components/ui/Button';
import { NavLink } from 'react-router-dom'; // ou Link, dependendo do seu roteador

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigation = [
    { name: 'Início', to: '/' },
    { name: 'Sobre', to: '/sobre' },
    { name: 'Cursos', to: '/cursos' },
    { name: 'Contato', to: '/contato' },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Marca + descrição + sociais */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              
              
            </div>

            <p className="text-gray-300 mb-4">
              Fortalecendo a gestão pública com capacitação e consultoria especializada,
              aliando eficiência, transparência e segurança jurídica.
            </p>

            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/marcus-alcantara"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
                aria-label="LinkedIn - Marcus Alcantara"
              >
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com/marcusalcantara_aju"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
                aria-label="Instagram - @marcusalcantara_aju"
              >
                <FaInstagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Navegação */}
          <div>
            <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <NavLink to={item.to} className="text-gray-300 hover:text-white">
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaWhatsapp className="h-5 w-5 mt-1 flex-shrink-0 text-green-400" />
                <a
                  href="https://wa.me/5579988187788"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 text-gray-300 hover:text-white"
                >
                  (79) 98818-7788
                </a>
              </li>

              <li className="flex items-start">
                <MdEmail className="h-5 w-5 mt-1 flex-shrink-0 text-blue-300" />
                <a
                  href="mailto:marcusalcantara@gmail.com"
                  className="ml-2 text-gray-300 hover:text-white"
                >
                  marcusalcantara@gmail.com
                </a>
              </li>

              <li className="flex items-start">
                <FaMapMarkerAlt className="h-5 w-5 mt-1 flex-shrink-0 text-red-300" />
                <address className="ml-2 not-italic text-gray-300">
                  Av. Jorge Amado, nº 1565, Sala 04 e 06<br />
                  Bairro Jardins – Aracaju/SE – CEP 49025-330
                </address>
              </li>
            </ul>

            <Button variant="primary" size="sm" className="mt-4" asChild>
              <a href="/contato">Solicitar Proposta</a>
            </Button>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-gray-400">
          <p>
            &copy; {currentYear} Alcantara Capacitação E EVENTOS LTDA. Todos os direitos
            reservados.
          </p>
          <p className="mt-1 text-sm">CNPJ: 12.575.826/0001-68</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
