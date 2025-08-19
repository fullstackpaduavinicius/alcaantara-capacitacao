import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGavel, FaUniversity, FaClipboardList } from 'react-icons/fa';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

const Services = () => {
  const phoneNumber = '5579988187788';

  const handleWhatsAppClick = (message) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  const services = [
    {
      icon: <FaGavel className="h-8 w-8 text-[#2D6A4F]" />,
      title: 'Regulamentação da Lei nº 14.133/2021',
      subtitle: 'Nova Lei de Licitações e Contratos Administrativos',
      intro:
        'Apoiamos órgãos da Administração Pública na elaboração e implementação de regulamentos próprios, rotinas e manuais internos que assegurem plena conformidade com a Lei nº 14.133/2021.',
      bulletsTitle: 'Nosso trabalho envolve:',
      bullets: [
        'Estruturação normativa para o novo regime de contratações;',
        'Adequação dos fluxos de trabalho às fases de planejamento, seleção e execução contratual;',
        'Criação de manuais e guias práticos para servidores;',
        'Capacitação das equipes responsáveis pelas contratações.',
      ],
      closing:
        'Proporcionamos uma transição segura para o novo marco legal, promovendo eficiência, integridade e padronização nos processos.',
      cta: 'Fale conosco',
      whatsappMessage:
        'Olá! Tenho interesse na consultoria de Regulamentação da Lei 14.133/2021. Podemos conversar?',
    },
    {
      icon: <FaUniversity className="h-8 w-8 text-[#2D6A4F]" />,
      title: 'Regulamentação da Lei nº 13.303/2016',
      subtitle: 'Lei das Estatais',
      intro:
        'Oferecemos suporte técnico na elaboração e revisão dos regulamentos de licitações e contratos das empresas estatais, em conformidade com a Lei nº 13.303/2016.',
      bulletsTitle: 'Entre as entregas, destacam-se:',
      bullets: [
        'Elaboração ou atualização de regulamentos internos de licitações e contratos;',
        'Alinhamento às boas práticas de governança corporativa e compliance;',
        'Orientações para a implementação de critérios objetivos de seleção e contratação;',
        'Fortalecimento dos mecanismos de controle e mitigação de riscos.',
      ],
      closing:
        'Garantimos atuação eficiente, transparente e competitiva, em ambiente jurídico seguro.',
      cta: 'Fale conosco',
      whatsappMessage:
        'Olá! Tenho interesse na consultoria para Regulamentação da Lei 13.303/2016 (Lei das Estatais). Podemos conversar?',
    },
    {
      icon: <FaClipboardList className="h-8 w-8 text-[#2D6A4F]" />,
      title: 'Consultoria sob Demanda em Licitações e Contratos',
      subtitle: 'Apoio técnico completo e personalizado',
      intro:
        'Consultoria personalizada para necessidades específicas, com apoio técnico em todas as fases da contratação pública, com ênfase na correta aplicação da Lei nº 14.133/2021.',
      bulletsTitle: 'Nossa atuação contempla:',
      bullets: [
        'Fase de Planejamento: DFD, ETP, TR/Projeto Básico, mapas e matrizes de riscos, estimativas, especificações e estratégia de contratação;',
        'Seleção do Fornecedor: escolha de modalidade, apoio na redação de editais e análise de conformidade das propostas;',
        'Execução Contratual: suporte à gestão e fiscalização, prevenção de falhas, aditivos indevidos e irregularidades.',
      ],
      closing:
        'Soluções práticas e seguras, adaptadas à realidade de cada cliente, fortalecendo a governança e promovendo contratações mais eficientes, íntegras e sustentáveis.',
      cta: 'Fale conosco',
      whatsappMessage:
        'Olá! Tenho interesse em Consultoria sob Demanda em Licitações e Contratos. Podemos conversar?',
    },
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div id="servicos" className="py-16 bg-[#F8F9FA]">
      {/* HERO/Intro removido: conteúdo "Consultoria Especializada / Saiba mais" foi eliminado */}

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1B4332]">
            Serviços de Consultoria
          </h2>
          <p className="text-lg text-[#343A40] max-w-4xl mx-auto">
            A ALCÂNTARA CAPACITAÇÃO E EVENTOS LTDA oferece consultoria especializada para fortalecer
            a governança pública e adequar órgãos e entidades às normas de contratações. Unimos
            conhecimento técnico, experiência prática e compromisso com a transparência, eficiência
            e segurança jurídica.
          </p>
        </motion.div>

        {/* Cards de serviços (3 itens) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card className="h-full p-6 bg-white border border-[#95D5B2]/20 hover:border-[#95D5B2]/40">
                <div className="flex flex-col h-full">
                  <div className="p-3 bg-[#95D5B2]/10 rounded-full w-12 h-12 flex items-center justify-center mb-4 border border-[#95D5B2]/20">
                    {s.icon}
                  </div>

                  <h3 className="text-xl font-bold text-[#343A40] leading-snug">{s.title}</h3>
                  {s.subtitle && (
                    <p className="text-sm text-[#495057] mt-1">{s.subtitle}</p>
                  )}

                  <p className="text-[#343A40] mt-4">{s.intro}</p>

                  <p className="text-sm font-semibold text-[#1B4332] mt-5">
                    {s.bulletsTitle}
                  </p>
                  <ul className="space-y-3 mt-3 mb-6">
                    {s.bullets.map((b, i) => (
                      <li key={i} className="flex items-start">
                        <svg
                          className="h-5 w-5 text-[#2D6A4F] mr-2 mt-0.5 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-[#343A40]">{b}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-[#343A40] mb-6">{s.closing}</p>

                  <div className="mt-auto">
                    <Button
                      variant="primary"
                      className="w-full bg-[#2D6A4F] hover:bg-[#95D5B2] text-white"
                      onClick={() => handleWhatsAppClick(s.whatsappMessage)}
                    >
                      {s.cta}
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
