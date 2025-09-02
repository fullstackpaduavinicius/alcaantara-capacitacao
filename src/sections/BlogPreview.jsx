'use client';

import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/Card';
import { motion } from 'framer-motion';
import { CalendarIcon, DocumentTextIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

// Helper para não quebrar links com acentos/espaços
const toPdfURL = (path) => encodeURI(path);

const blogPosts = [
  {
    title: 'A atuação do Controle Interno na Lei 14.133/2021',
    excerpt:
      'Papel estratégico das unidades de controle interno na nova Lei de Licitações: prevenção de riscos, responsabilização e governança.',
    date: '', // opcional (ex.: "12/08/2024")
    category: 'Controle Interno',
    image: '/images/blog/controle-interno.jpg', // ajuste conforme suas imagens
    pdf: '/pdfs/A_atuação_do_Controle_Interno_na_Lei_14133_Marcus.pdf',
  },
 // {
//   title: 'Exigência do balanço patrimonial dos últimos dois anos',
//    excerpt:
///      'Fundamentos jurídicos e aplicação prática da exigência de balanço patrimonial nas licitações.',
//    date: '',
//   category: 'Habilitação',
 //   image: '/images/blog/balanco-patrimonial.jpg',
  //  pdf: '/pdfs/A_exigência_do_balanço_patrimonial_dos_últimos_dois_anos_Marcus_Ronny.pdf',
//  },
//  {
  //  title: 'Lei 14.065/2020 — Regime especial e impactos',
 //   excerpt:
  //    'Análise dos ajustes legais e seus reflexos nos processos de contratações públicas, com enfoque prático.',
  //  date: '',
  //  category: 'Lei 14.065/2020',
  //  image: '/images/blog/lei-14065.jpg',
   // pdf: '/pdfs/Artigo_Carmen_Boaventura_e_Marcus_Alcântara_Lei_14065-2020.pdf',
//  },
  {
    title: 'Habilitação nas contratações — pontos críticos',
    excerpt:
      'Critérios, documentos e boas práticas para uma fase de habilitação segura e eficiente.',
    date: '',
    category: 'Habilitação',
    image: '/images/blog/habilitacao.jpg',
    pdf: '/pdfs/Artigo_Carmen_Boaventura_Habilitação.pdf',
  },
];

export default function BlogPreview() {
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
            Artigos e Materiais
          </h2>
          <p className="text-lg text-[#343A40] max-w-3xl mx-auto">
            Conteúdos práticos sobre a Nova Lei de Licitações (Lei 14.133/2021), governança, controle interno, habilitação e gestão contratual.
            Clique para <span className="font-semibold">abrir os PDFs</span>.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
            >
              <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white border border-[#95D5B2]/20 hover:border-[#95D5B2]/40">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-40 object-cover border-b border-[#D4AF37]/20"
                />

                <CardHeader>
                  <span className="inline-block bg-[#95D5B2]/10 text-[#1B4332] text-xs px-2 py-1 rounded mb-2 border border-[#95D5B2]/20">
                    {post.category}
                  </span>
                  <CardTitle className="text-[#343A40]">{post.title}</CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-[#343A40] mb-4">{post.excerpt}</p>
                  {post.date ? (
                    <div className="flex items-center text-sm text-[#343A40]/80">
                      <CalendarIcon className="h-4 w-4 mr-1 text-[#2D6A4F]" />
                      <span>{post.date}</span>
                    </div>
                  ) : null}
                </CardContent>

                <CardFooter className="flex items-center justify-between">
                  <a
                    href={toPdfURL(post.pdf)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#2D6A4F] hover:text-[#1B4332] font-medium flex items-center gap-2 group"
                    aria-label={`Abrir PDF: ${post.title}`}
                  >
                    <DocumentTextIcon className="w-5 h-5" />
                    Abrir PDF
                    <ArrowTopRightOnSquareIcon className="w-4 h-4 text-[#D4AF37] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>

                  <a
                    href={toPdfURL(post.pdf)}
                    download
                    className="text-sm text-[#343A40]/70 hover:text-[#1B4332] underline decoration-[#D4AF37]/40 hover:decoration-[#D4AF37]"
                  >
                    Baixar
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
            <svg
              className="w-5 h-5 ml-2 text-[#D4AF37] group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
