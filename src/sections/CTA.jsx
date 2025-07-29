import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'

const CTA = () => {
  return (
    <section className="py-16 bg-primary-700 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para fortalecer sua gestão pública?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Entre em contato e descubra como podemos ajudar seu órgão a alcançar excelência na administração pública.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="secondary" size="lg" asChild>
              <a href="/contato">
                Solicitar Proposta
              </a>
            </Button>
            <Button variant="white" size="lg" asChild>
              <a href="tel:+5579988187788">
                Falar por Telefone
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA