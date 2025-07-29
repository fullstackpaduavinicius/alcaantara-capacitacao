import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/Card'
import { motion } from 'framer-motion'
import { CalendarIcon, ClockIcon } from '@heroicons/react/24/outline'

const blogPosts = [
  {
    title: "Novas Regras para Pregão Eletrônico em 2025",
    excerpt: "Entenda as mudanças na legislação que afetarão os processos licitatórios deste ano.",
    date: "15/06/2025",
    readTime: "5 min",
    category: "Legislação",
    image: "/images/blog/1.jpg",
    slug: "novas-regras-pregao-2025"
  },
  {
    title: "Como Evitar Impugnações em Licitações",
    excerpt: "Conheça as melhores práticas para reduzir contestações e garantir processos mais ágeis.",
    date: "02/06/2025",
    readTime: "7 min",
    category: "Práticas",
    image: "/images/blog/2.jpg",
    slug: "evitar-impugnacoes-licitacoes"
  },
  {
    title: "Gestão de Contratos na Administração Pública",
    excerpt: "Técnicas eficientes para acompanhamento e fiscalização de contratos administrativos.",
    date: "20/05/2025",
    readTime: "8 min",
    category: "Gestão",
    image: "/images/blog/3.jpg",
    slug: "gestao-contratos-administracao-publica"
  }
]

const BlogPreview = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Artigos e Notícias</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
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
              <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <span className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded mb-2">
                    {post.category}
                  </span>
                  <CardTitle>{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500 space-x-4">
                    <div className="flex items-center">
                      <CalendarIcon className="h-4 w-4 mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center">
                      <ClockIcon className="h-4 w-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <a 
                    href={`/blog/${post.slug}`} 
                    className="text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Ler artigo completo →
                  </a>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="/blog" 
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-lg"
          >
            Ver todos os artigos
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default BlogPreview