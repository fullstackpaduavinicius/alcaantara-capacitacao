import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/Card'
import { motion } from 'framer-motion'
import { FaChalkboardTeacher, FaHandshake, FaBookOpen } from 'react-icons/fa'

const services = [
  {
    icon: <FaChalkboardTeacher className="h-8 w-8 text-primary-600" />,
    title: "Cursos de Capacitação",
    description: "Treinamentos especializados em licitações, contratos e gestão pública para servidores e gestores.",
    link: "/servicos/capacitacao"
  },
  {
    icon: <FaHandshake className="h-8 w-8 text-primary-600" />,
    title: "Consultoria em Licitações",
    description: "Assessoria técnica para processos licitatórios, desde o planejamento até a homologação.",
    link: "/servicos/consultoria"
  },
  {
    icon: <FaBookOpen className="h-8 w-8 text-primary-600" />,
    title: "Material Didático",
    description: "Produção de manuais, guias e apostilas especializadas em legislação pública.",
    link: "/servicos/material"
  }
]

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Nossos Serviços</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Soluções completas para capacitação e desenvolvimento da gestão pública
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center">
                    <div className="p-3 bg-primary-50 rounded-full mr-4">
                      {service.icon}
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
                <CardFooter>
                  <a 
                    href={service.link} 
                    className="text-primary-600 hover:text-primary-700 font-medium flex items-center"
                  >
                    Saiba mais
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection