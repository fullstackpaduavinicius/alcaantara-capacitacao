import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/Card'
import { motion } from 'framer-motion'
import { FaBalanceScale, FaSyncAlt, FaUserShield } from 'react-icons/fa'

const services = [
  {
    icon: <FaBalanceScale className="h-8 w-8 text-[#2D6A4F]" />,
    title: "Regulamentação da Nova Lei",
    description: "Apoio completo na estruturação e revisão de regulamentos e fluxos internos conforme a Lei nº 14.133/2021.",
    link: "/servicos/regulamentacao"
  },
  {
    icon: <FaSyncAlt className="h-8 w-8 text-[#2D6A4F]" />,
    title: "Atualização de Estatais",
    description: "Consultoria para revisão dos regulamentos das empresas estatais conforme a Lei nº 13.303/2016.",
    link: "/servicos/estatais"
  },
  {
    icon: <FaUserShield className="h-8 w-8 text-[#2D6A4F]" />,
    title: "Consultoria sob Demanda",
    description: "Atendimento contínuo e personalizado para dúvidas práticas e apoio na gestão de contratações públicas.",
    link: "/servicos/consultoria"
  }
]

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-16 bg-[#F8F9FA]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1B4332]">Consultoria Especializada</h2>
          <p className="text-lg text-[#495057] max-w-2xl mx-auto">
            Soluções técnicas e estratégicas para fortalecer a gestão pública em todas as etapas da contratação
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
                    <div className="p-3 bg-[#E9F5EE] rounded-full mr-4">
                      {service.icon}
                    </div>
                    <CardTitle className="text-[#1B4332]">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-[#495057]">{service.description}</p>
                </CardContent>
                <CardFooter>
                  <a
                    href={service.link}
                    className="text-[#D4AF37] hover:text-[#c69c2c] font-medium flex items-center"
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
