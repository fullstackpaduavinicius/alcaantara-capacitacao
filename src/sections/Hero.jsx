import { motion } from 'framer-motion'
import { ArrowDownIcon } from '@heroicons/react/24/outline'
import { Button } from '@/components/ui/Button'

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-[#1B4332] to-[#2D6A4F] text-white overflow-hidden">
      <div className="container mx-auto px-4 py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif text-white"
          >
            Capacitação e Consultoria para a Gestão Pública
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-10 text-[#F8F9FA] font-sans"
          >
            Fortalecendo a administração pública com conhecimento técnico e boas práticas
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Button
              size="lg"
              asChild
              className="bg-[#D4AF37] text-[#1B4332] hover:bg-[#c69c2c] transition font-semibold"
            >
              <a href="/servicos">Nossos Serviços</a>
            </Button>

            <Button
              size="lg"
              asChild
              className="bg-[#D4AF37] text-[#1B4332] hover:bg-[#c69c2c] transition font-semibold"
            >
              <a href="/contato">Fale Conosco</a>
            </Button>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <motion.a
          href="#sobre"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-[#F8F9FA] hover:text-white"
        >
          <ArrowDownIcon className="h-8 w-8" />
        </motion.a>
      </div>
    </section>
  )
}

export default Hero