import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'

const AboutPreview = () => {
  return (
    <section id="sobre" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src="/images/about-preview.jpg" 
              alt="Sobre a Alcaântara" 
              className="rounded-lg shadow-md w-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Mais de 15 anos capacitando servidores públicos</h2>
            <p className="text-lg text-gray-600 mb-6">
              Desde 2010, a Alcaântara Capacitação tem se dedicado ao fortalecimento da gestão pública através 
              de treinamentos especializados e consultorias técnicas.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Mais de 500 servidores capacitados",
                "Atuação em 8 estados brasileiros",
                "Equipe de especialistas com experiência prática",
                "Material didático atualizado"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg className="h-6 w-6 text-primary mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <Button variant="primary" size="lg" asChild>
              <a href="/sobre">
                Conheça nossa história
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutPreview