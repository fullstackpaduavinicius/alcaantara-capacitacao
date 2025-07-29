import { Card } from '@/components/ui/Card'
import { motion } from 'framer-motion'
import { FaQuoteLeft } from 'react-icons/fa'

const testimonials = [
  {
    name: "Carlos Eduardo",
    role: "Secretário de Administração - Prefeitura de Aracaju",
    content: "Os cursos da Alcaântara revolucionaram nossa forma de lidar com licitações. O conhecimento adquirido trouxe economia significativa aos cofres públicos.",
    avatar: "/images/avatars/1.jpg"
  },
  {
    name: "Mariana Santos",
    role: "Diretora de Contratos - Governo do Estado",
    content: "A consultoria especializada nos ajudou a estruturar processos mais transparentes e eficientes. Recomendo a todos os órgãos públicos.",
    avatar: "/images/avatars/2.jpg"
  },
  {
    name: "Roberto Almeida",
    role: "Vereador - Câmara Municipal",
    content: "Material didático claro e objetivo. Nossos servidores finalmente entenderam os nuances da Lei 8.666/93 após o treinamento.",
    avatar: "/images/avatars/3.jpg"
  }
]

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Depoimentos</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            O que dizem sobre nossos serviços
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full p-6">
                <div className="flex flex-col h-full">
                  <FaQuoteLeft className="h-8 w-8 text-primary-600 mb-4" />
                  <p className="text-gray-600 mb-6 flex-grow">{testimonial.content}</p>
                  <div className="flex items-center">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="h-12 w-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials