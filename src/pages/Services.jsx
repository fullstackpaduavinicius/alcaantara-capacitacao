import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaChartLine, FaUsers } from 'react-icons/fa';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import ServicesSection from '../sections/ServicesSection';

const Services = () => {
  const phoneNumber = "5579988776655";
  const serviceDetails = [
    {
      icon: <FaCheckCircle className="h-8 w-8 text-[#2D6A4F]" />,
      title: "Capacitação Técnica",
      description: "Programas completos de treinamento para servidores públicos em todas as áreas da administração.",
      features: [
        "Cursos presenciais e EAD",
        "Material didático exclusivo",
        "Certificação reconhecida",
        "Turmas exclusivas para órgãos"
      ],
      cta: "Solicitar Programa",
      whatsappMessage: "Olá, gostaria de solicitar informações sobre o programa de Capacitação Técnica para servidores públicos. Poderia me enviar mais detalhes?"
    },
    {
      icon: <FaChartLine className="h-8 w-8 text-[#2D6A4F]" />,
      title: "Consultoria Especializada",
      description: "Assessoria técnica para otimização de processos licitatórios e contratos administrativos.",
      features: [
        "Diagnóstico de processos",
        "Elaboração de editais",
        "Acompanhamento de licitações",
        "Treinamento in company"
      ],
      cta: "Agendar Consultoria",
      whatsappMessage: "Olá, estou interessado(a) em agendar uma Consultoria Especializada para otimização de processos licitatórios. Qual é a disponibilidade?"
    },
    {
      icon: <FaUsers className="h-8 w-8 text-[#2D6A4F]" />,
      title: "Soluções Customizadas",
      description: "Desenvolvimento de programas específicos para necessidades institucionais.",
      features: [
        "Análise de demandas",
        "Desenho de soluções",
        "Implementação gradativa",
        "Avaliação de resultados"
      ],
      cta: "Falar com Especialista",
      whatsappMessage: "Olá, preciso falar com um especialista sobre Soluções Customizadas para minha instituição. Podemos conversar?"
    }
  ];

  // Efeito para rolar para o topo quando a página é carregada
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  const handleWhatsAppClick = (message) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div id="servicos" className="py-16 bg-[#F8F9FA]">
      <ServicesSection />

      <div className="container mx-auto px-4 mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1B4332]">
            Nossa Abordagem
          </h2>
          <p className="text-lg text-[#343A40] max-w-3xl mx-auto">
            Metodologia prática baseada em casos reais da administração pública
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceDetails.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full p-6 bg-white border border-[#95D5B2]/20 hover:border-[#95D5B2]/40">
                <div className="flex flex-col h-full">
                  <div className="p-3 bg-[#95D5B2]/10 rounded-full w-12 h-12 flex items-center justify-center mb-4 border border-[#95D5B2]/20">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#343A40]">
                    {service.title}
                  </h3>
                  <p className="text-[#343A40] mb-6">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="h-5 w-5 text-[#2D6A4F] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-[#343A40]">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto">
                    <Button 
                      variant="primary" 
                      className="w-full bg-[#2D6A4F] hover:bg-[#95D5B2] text-white"
                      onClick={() => handleWhatsAppClick(service.whatsappMessage)}
                    >
                      {service.cta}
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;