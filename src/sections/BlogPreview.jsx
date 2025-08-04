import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/Card'
import { motion } from 'framer-motion'
import { CalendarIcon } from '@heroicons/react/24/outline'

const blogPosts = [
  {
    title: "Novas Regras para Pregão Eletrônico em 2025",
    excerpt: "Entenda as mudanças na legislação que afetarão os processos licitatórios deste ano.",
    date: "15/06/2025",
    category: "Legislação",
    image: "/images/blog/1.jpg",
    pdf: "/pdfs/pregao-eletronico-2025.pdf" // Caminho para o PDF na pasta public
  },
  {
    title: "Como Evitar Impugnações em Licitações",
    excerpt: "Conheça as melhores práticas para reduzir contestações e garantir processos mais ágeis.",
    date: "02/06/2025",
    category: "Práticas",
    image: "/images/blog/2.jpg",
    pdf: "/pdfs/evitar-impugnacoes.pdf"
  },
  {
    title: "Gestão de Contratos na Administração Pública",
    excerpt: "Técnicas eficientes para acompanhamento e fiscalização de contratos administrativos.",
    date: "20/05/2025",
    category: "Gestão",
    image: "/images/blog/3.jpg",
    pdf: "/pdfs/gestao-contratos.pdf"
  }
]

const BlogPreview = () => {
  return (
    <section className="py-16 bg-[#F8F9FA]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1B4332]">
            Artigos e Notícias
          </h2>
          <p className="text-lg text-[#343A40] max-w-2xl mx-auto">
            Conteúdo atualizado sobre gestão pública e licitações
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white border border-[#95D5B2]/20 hover:border-[#95D5B2]/40">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover border-b border-[#D4AF37]/20"
                />
                <CardHeader>
                  <span className="inline-block bg-[#95D5B2]/10 text-[#1B4332] text-xs px-2 py-1 rounded mb-2 border border-[#95D5B2]/20">
                    {post.category}
                  </span>
                  <CardTitle className="text-[#343A40]">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#343A40] mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-[#343A40]/80">
                    <CalendarIcon className="h-4 w-4 mr-1 text-[#2D6A4F]" />
                    <span>{post.date}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <a 
                    href={post.pdf} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#2D6A4F] hover:text-[#1B4332] font-medium flex items-center group"
                  >
                    Ler artigo completo
                    <svg className="w-5 h-5 ml-2 text-[#D4AF37] group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="/blog" 
            className="inline-flex items-center text-[#2D6A4F] hover:text-[#1B4332] font-medium text-lg group"
          >
            Ver todos os artigos
            <svg className="w-5 h-5 ml-2 text-[#D4AF37] group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default BlogPreview