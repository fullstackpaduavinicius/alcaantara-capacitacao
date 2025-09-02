'use client';

import { useState, useEffect } from 'react';
import { Button } from '../components/ui/Button';
import { motion } from 'framer-motion';
import { FiCalendar, FiArrowRight } from 'react-icons/fi';
import { Helmet } from 'react-helmet-async';

// Helper para não quebrar links com acentos/espaços
const toPdfURL = (path) => encodeURI(path);

// Posts -> PDFs
const mockPosts = [
  {
    id: 1,
    title: 'A atuação do Controle Interno na Lei 14.133/2021',
    excerpt:
      'Papel estratégico das unidades de controle interno na nova Lei de Licitações: prevenção de riscos, responsabilização e governança.',
    date: '', // opcional, ex.: '2024-08-12'
    category: 'Controle Interno',
    image: '/images/blog/controle-interno.jpg',
    pdf: '/pdfs/A_atuação_do_Controle_Interno_na_Lei_14133_Marcus.pdf',
  },
  {
    id: 2,
    title: 'Exigência do balanço patrimonial dos últimos dois anos',
    excerpt:
      'Fundamentos jurídicos e aplicação prática da exigência de balanço patrimonial nas licitações.',
    date: '',
    category: 'Habilitação',
    image: '/images/blog/balanco-patrimonial.jpg',
    pdf: '/pdfs/A_exigência_do_balanço_patrimonial_dos_últimos_dois_anos_Marcus_Ronny.pdf',
  },
  {
    id: 3,
    title: 'Lei 14.065/2020 — Regime especial e impactos',
    excerpt:
      'Análise dos ajustes legais e seus reflexos nos processos de contratações públicas, com enfoque prático.',
    date: '',
    category: 'Lei 14.065/2020',
    image: '/images/blog/lei-14065.jpg',
    pdf: '/pdfs/Artigo_Carmen_Boaventura_e_Marcus_Alcântara_Lei_14065-2020.pdf',
  },
  {
    id: 4,
    title: 'Habilitação nas contratações — pontos críticos',
    excerpt:
      'Critérios, documentos e boas práticas para uma fase de habilitação segura e eficiente.',
    date: '',
    category: 'Habilitação',
    image: '/images/blog/habilitacao.jpg',
    pdf: '/pdfs/Artigo_Carmen_Boaventura_Habilitação.pdf',
  },
];

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Mock de “chamada” — troque por fetch/axios se desejar
    const fetchPosts = async () => {
      try {
        setTimeout(() => {
          setPosts(mockPosts);
          setLoading(false);
        }, 500);
      } catch (error) {
        console.error('Erro ao carregar posts:', error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Categorias dinâmicas com "Todos" na frente
  const categorySet = Array.from(new Set(posts.map((p) => p.category)));
  const categories = ['Todos', ...categorySet];

  const filteredPosts =
    selectedCategory === 'Todos'
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Artigos e Materiais — Alcântara Capacitação</title>
        <meta
          name="description"
          content="Artigos e materiais práticos sobre a Lei 14.133/2021, controle interno, habilitação e gestão contratual. Clique e abra os PDFs."
        />
      </Helmet>

      <div className="bg-[#F8F9FA] py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-[#1B4332] mb-4">
              Artigos e Materiais
            </h1>
            <p className="text-lg text-[#343A40] max-w-2xl mx-auto">
              Conteúdos sobre a Nova Lei de Licitações (Lei 14.133/2021), governança,
              controle interno, habilitação e gestão contratual. Clique para abrir o PDF.
            </p>
          </motion.div>

          {/* Filtros por categoria */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'primary' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="mb-2"
              >
                {category}
              </Button>
            ))}
          </div>

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#2D6A4F]" />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-[#95D5B2]/20"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover border-b border-[#D4AF37]/20"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center text-sm mb-2">
                      <span className="bg-[#95D5B2]/10 text-[#1B4332] text-xs font-medium px-2.5 py-0.5 rounded border border-[#95D5B2]/20">
                        {post.category}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold mb-2 text-[#343A40]">
                      {post.title}
                    </h2>

                    <p className="text-[#343A40] mb-4">{post.excerpt}</p>

                    {/* Data (opcional) */}
                    {post.date ? (
                      <div className="flex items-center justify-between text-sm text-[#343A40]/80 mb-4">
                        <div className="flex items-center">
                          <FiCalendar className="mr-1 text-[#2D6A4F]" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                    ) : (
                      <div className="mb-4" />
                    )}

                    {/* Abrir PDF */}
                    <div className="flex items-center gap-3">
                      <Button
                        variant="outline"
                        className="text-[#2D6A4F] hover:text-[#1B4332] border-[#2D6A4F] hover:border-[#1B4332]"
                        asChild
                      >
                        <a
                          href={toPdfURL(post.pdf)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center"
                        >
                          Abrir PDF <FiArrowRight className="ml-2 text-[#D4AF37]" />
                        </a>
                      </Button>

                      {/* Baixar diretamente */}
                      <a
                        href={toPdfURL(post.pdf)}
                        download
                        className="text-sm text-[#343A40]/70 hover:text-[#1B4332] underline decoration-[#D4AF37]/40 hover:decoration-[#D4AF37]"
                      >
                        Baixar
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Blog;
