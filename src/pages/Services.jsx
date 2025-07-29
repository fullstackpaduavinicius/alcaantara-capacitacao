import { motion } from 'framer-motion'
import { FaCheckCircle, FaChartLine, FaUsers } from 'react-icons/fa'
import { Button } from '../components/ui/Button' // Importação adicionada
import { Card } from '../components/ui/Card'
import ServicesSection from '../sections/ServicesSection'

const Services = () => {
  const serviceDetails = [
    {
      icon: <FaCheckCircle className="h-8 w-8 text-primary-600" />,
      title: "Capacitação Técnica",
      description: "Programas completos de treinamento para servidores públicos em todas as áreas da administração.",
      features: [
        "Cursos presenciais e EAD",
        "Material didático exclusivo",
        "Certificação reconhecida",
        "Turmas exclusivas para órgãos"
      ],
      cta: "Solicitar Programa"
    },
    {
      icon: <FaChartLine className="h-8 w-8 text-primary-600" />,
      title: "Consultoria Especializada",
      description: "Assessoria técnica para otimização de processos licitatórios e contratos administrativos.",
      features: [
        "Diagnóstico de processos",
        "Elaboração de editais",
        "Acompanhamento de licitações",
        "Treinamento in company"
      ],
      cta: "Agendar Consultoria"
    },
    {
      icon: <FaUsers className="h-8 w-8 text-primary-600" />,
      title: "Soluções Customizadas",
      description: "Desenvolvimento de programas específicos para necessidades institucionais.",
      features: [
        "Análise de demandas",
        "Desenho de soluções",
        "Implementação gradativa",
        "Avaliação de resultados"
      ],
      cta: "Falar com Especialista"
    }
  ]

  return (
    <div className="py-16 bg-gray-50">
      <ServicesSection />

      <div className="container mx-auto px-4 mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Nossa Abordagem</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Metodologia prática baseada em casos reais da administração pública
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceDetails.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full p-6">
                <div className="flex flex-col h-full">
                  <div className="p-3 bg-primary-50 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="h-5 w-5 text-primary-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto">
                    <Button variant="primary" className="w-full" asChild>
                      <a href="/contato">
                        {service.cta}
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services