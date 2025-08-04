import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { motion } from 'framer-motion';
import { FiCalendar, FiClock, FiArrowRight } from 'react-icons/fi';
import { Helmet } from 'react-helmet-async';

// Mock data - substitua por chamada API real
const mockPosts = [
  {
    id: 1,
    title: "Como melhorar suas habilidades profissionais",
    excerpt: "Descubra as melhores técnicas para se destacar no mercado de trabalho atual.",
    content: "Conteúdo completo do post...",
    date: "2023-05-15",
    readTime: "5 min",
    category: "Carreira",
    image: "/images/blog/post1.jpg"
  },
  {
    id: 2,
    title: "Tendências de capacitação para 2023",
    excerpt: "As principais tendências em educação profissional que você precisa conhecer.",
    content: "Conteúdo completo do post...",
    date: "2023-06-22",
    readTime: "8 min",
    category: "Educação",
    image: "/images/blog/post2.jpg"
  },
  {
    id: 3,
    title: "Gestão do tempo para profissionais",
    excerpt: "Aprenda a gerenciar seu tempo de forma eficiente e aumentar sua produtividade.",
    content: "Conteúdo completo do post...",
    date: "2023-07-10",
    readTime: "6 min",
    category: "Produtividade",
    image: "/images/blog/post3.jpg"
  }
];

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  // Efeito para rolar para o topo quando a página é carregada
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    const fetchPosts = async () => {
      try {
        setTimeout(() => {
          setPosts(mockPosts);
          setLoading(false);
        }, 800);
      } catch (error) {
        console.error("Erro ao carregar posts:", error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const categories = ['Todos', 'Carreira', 'Educação', 'Produtividade'];

  const filteredPosts = selectedCategory === 'Todos' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Blog - Alcaântara Capacitação</title>
        <meta name="description" content="Artigos e dicas sobre capacitação profissional, carreira e desenvolvimento" />
      </Helmet>

      <div className="bg-[#F8F9FA] py-16"> {/* cinzaClaro */}
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-[#1B4332] mb-4">Nosso Blog</h1> {/* verdeEscuro */}
            <p className="text-lg text-[#343A40] max-w-2xl mx-auto"> {/* cinzaEscuro */}
              Artigos, notícias e dicas para seu desenvolvimento profissional
            </p>
          </motion.div>

          {/* Filtros por categoria */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map(category => (
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
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#2D6A4F]"></div> {/* verdeMedio */}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-[#95D5B2]/20" /* verdeClaro com opacidade */
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover border-b border-[#D4AF37]/20" /* dourado com opacidade */
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm mb-2">
                      <span className="bg-[#95D5B2]/10 text-[#1B4332] text-xs font-medium px-2.5 py-0.5 rounded border border-[#95D5B2]/20"> {/* verdeClaro/verdeEscuro */}
                        {post.category}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold mb-2 text-[#343A40]">{post.title}</h2> {/* cinzaEscuro */}
                    <p className="text-[#343A40] mb-4">{post.excerpt}</p> {/* cinzaEscuro */}
                    <div className="flex items-center justify-between text-sm text-[#343A40]/80 mb-4"> {/* cinzaEscuro com opacidade */}
                      <div className="flex items-center">
                        <FiCalendar className="mr-1 text-[#2D6A4F]" /> {/* verdeMedio */}
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center">
                        <FiClock className="mr-1 text-[#2D6A4F]" /> {/* verdeMedio */}
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <Button 
                      variant="outline" 
                      className="text-[#2D6A4F] hover:text-[#1B4332] border-[#2D6A4F] hover:border-[#1B4332]" /* verdeMedio -> verdeEscuro */
                      asChild
                    >
                      <Link 
                        to={`/blog/${post.id}`} 
                        className="flex items-center"
                      >
                        Ler artigo <FiArrowRight className="ml-2 text-[#D4AF37]" /> {/* dourado */}
                      </Link>
                    </Button>
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