import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Card } from '../components/ui/Card'

const About = () => {
  // Efeito para rolar para o topo quando a página é carregada
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [])

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Sobre a Alcantara Capacitação</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Conheça nossa trajetória, missão e valores que nos guiam desde 2010
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src="/images/about.jpg" 
              alt="Equipe Alcantara" 
              className="rounded-lg shadow-md w-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Nossa História</h2>
                <p className="text-gray-600 mb-4">
                  Fundada em 2010, a Alcantara Capacitação surgiu da necessidade de capacitação técnica 
                  especializada para servidores públicos. Ao longo dos anos, tornamo-nos referência 
                  em treinamentos para gestão pública.
                </p>
                
                <h2 className="text-2xl font-bold mb-4 text-gray-900 mt-6">Missão</h2>
                <p className="text-gray-600 mb-4">
                  Contribuir para o fortalecimento da gestão pública por meio da capacitação de servidores 
                  e gestores, promovendo o conhecimento técnico, a integridade e a eficiência nas práticas 
                  administrativas.
                </p>
                
                <h2 className="text-2xl font-bold mb-4 text-gray-900 mt-6">Valores</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {['Ética', 'Integridade', 'Comprometimento', 'Profissionalismo', 'Responsabilidade social', 'Modernização', 'Excelência técnica', 'Inovação'].map((value, index) => (
                    <li key={index} className="flex items-center">
                      <span className="bg-primary-100 text-primary-800 p-2 rounded-full mr-3">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                      </span>
                      <span className="text-gray-700">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default About