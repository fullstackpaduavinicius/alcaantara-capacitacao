import { useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaGavel, FaUniversity, FaClipboardList, FaWhatsapp } from 'react-icons/fa';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

/**
 * Services (Reformulado)
 * - Componentização do Card de Serviço (ServiceCard)
 * - Conteúdos padronizados (títulos, subtítulos e bullets sem pontuação redundante)
 * - Constantes centralizadas (telefone, cores, mensagens)
 * - Seção extra "Modalidades e Agendamento" com CTA
 * - Melhorias de acessibilidade e animações consistentes
 */

const WHATSAPP_PHONE = '5579988187788';
const COLORS = {
  primary: '#2D6A4F',
  primarySoft: '#95D5B2',
  title: '#1B4332',
  text: '#343A40',
  textMuted: '#495057',
  bg: '#F8F9FA',
};

const openWhatsApp = (message) => {
  const encodedMessage = encodeURIComponent(message);
  // target=_blank + rel para segurança
  window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${encodedMessage}`, '_blank', 'noopener,noreferrer');
};

const ServiceCard = ({ icon, title, subtitle, intro, bulletsTitle, bullets, closing, cta, whatsappMessage }) => (
  <Card className="h-full p-6 bg-white border border-[#95D5B2]/20 hover:border-[#95D5B2]/40">
    <div className="flex flex-col h-full">
      <div
        aria-hidden
        className="p-3 bg-[#95D5B2]/10 rounded-full w-12 h-12 flex items-center justify-center mb-4 border border-[#95D5B2]/20"
      >
        {icon}
      </div>

      <h3 className="text-xl font-bold text-[#343A40] leading-snug">{title}</h3>
      {subtitle && <p className="text-sm text-[#495057] mt-1">{subtitle}</p>}

      {intro && <p className="text-[#343A40] mt-4">{intro}</p>}

      {bullets?.length > 0 && (
        <>
          <p className="text-sm font-semibold text-[#1B4332] mt-5">{bulletsTitle}</p>
          <ul className="space-y-3 mt-3 mb-6">
            {bullets.map((b, i) => (
              <li key={i} className="flex items-start">
                <svg
                  className="h-5 w-5 text-[#2D6A4F] mr-2 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[#343A40]">{b}</span>
              </li>
            ))}
          </ul>
        </>
      )}

      {closing && <p className="text-[#343A40] mb-6">{closing}</p>}

      <div className="mt-auto">
        <Button
          variant="primary"
          className="w-full bg-[#2D6A4F] hover:bg-[#95D5B2] text-white"
          onClick={() => openWhatsApp(whatsappMessage)}
        >
          {cta}
        </Button>
      </div>
    </div>
  </Card>
);

const Services = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Mantém os dados fora do JSX para facilitar manutenção
  const services = useMemo(
    () => [
      {
        icon: <FaGavel className="h-8 w-8" style={{ color: COLORS.primary }} />,
        title: 'Regulamentação da Lei nº 14.133/2021',
        subtitle: 'Nova Lei de Licitações e Contratos Administrativos',
        intro:
          'Apoiamos órgãos da Administração Pública na elaboração e implementação de regulamentos, rotinas e manuais que assegurem plena conformidade com a Lei nº 14.133/2021.',
        bulletsTitle: 'Nosso trabalho envolve',
        bullets: [
          'Estruturação normativa para o novo regime de contratações',
          'Adequação de fluxos às fases de planejamento, seleção e execução contratual',
          'Criação de manuais e guias práticos para servidores',
          'Capacitação das equipes responsáveis pelas contratações',
          'Elaboração/atualização de regulamentos internos de estatais (Lei 13.303/2006)',
        ],
        closing:
          'Proporcionamos transição segura para o novo marco legal, promovendo eficiência, integridade e padronização dos processos.',
        cta: 'Fale conosco',
        whatsappMessage: 'Olá! Tenho interesse na consultoria de Regulamentação da Lei 14.133/2021. Podemos conversar?',
      },
      {
        icon: <FaUniversity className="h-8 w-8" style={{ color: COLORS.primary }} />,
        title: 'Capacitação (Cursos In Company)',
        subtitle: 'Lei das Estatais e temas correlatos',
        intro:
          'Cursos práticos e atualizados em gestão pública: Lei de Licitações (14.133), controles internos e governança — voltados a órgãos públicos, tribunais de contas e escolas de governo.',
        bulletsTitle: 'Entre as entregas, destacam-se',
        bullets: [
          'Fase preparatória: PCA, DFD, ETP, TR e matriz de riscos',
          'Responsabilidades, atribuições e boas práticas de fiscalização e gestão contratual',
          'SRP na prática: atas, caronas e planejamento de demanda',
          'Dispensa e inexigibilidade: hipóteses, riscos e documentação',
          'Novo papel do controle interno nas contratações e responsabilização de agentes',
          'Estruturação de sistemas de controle e mapeamento de riscos',
          'Mecanismos auxiliares: credenciamento, pré-qualificação e SRP',
          'Tratamento às MPEs, critérios de habilitação e regularização',
          'Treinamento para auditoria interna alinhado a normas globais',
        ],
        closing: 'Garantimos atuação eficiente, transparente e competitiva, com segurança jurídica.',
        cta: 'Solicitar programa',
        whatsappMessage: 'Olá! Gostaria de receber o programa detalhado dos cursos In Company. Pode me enviar?',
      },
      {
        icon: <FaClipboardList className="h-8 w-8" style={{ color: COLORS.primary }} />,
        title: 'Consultoria sob Demanda em Licitações e Contratos',
        subtitle: 'Apoio técnico completo e personalizado',
        intro:
          'Apoio técnico em todas as fases da contratação pública, com ênfase na correta aplicação da Lei nº 14.133/2021.',
        bulletsTitle: 'Nossa atuação contempla',
        bullets: [
          'Planejamento: DFD, ETP, TR/Projeto Básico, riscos, estimativas e estratégia',
          'Seleção do fornecedor: modalidade, editais e análise de conformidade',
          'Execução contratual: gestão, fiscalização e prevenção de falhas e aditivos indevidos',
        ],
        closing:
          'Soluções práticas e seguras, adaptadas à realidade de cada cliente, fortalecendo a governança e promovendo contratações mais eficientes e sustentáveis.',
        cta: 'Fale com um especialista',
        whatsappMessage: 'Olá! Tenho interesse em Consultoria sob Demanda em Licitações e Contratos. Podemos conversar?',
      },
    ], []
  );

  return (
    <div id="servicos" className="py-16" style={{ backgroundColor: COLORS.bg }}>
      <div className="container mx-auto px-4">
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: COLORS.title }}>
            Serviços de Consultoria
          </h2>
          <p className="text-lg max-w-4xl mx-auto" style={{ color: COLORS.text }}>
            A ALCÂNTARA CAPACITAÇÃO E EVENTOS LTDA oferece consultoria especializada para fortalecer a governança
            pública e adequar órgãos e entidades às normas de contratações. Unimos conhecimento técnico e experiência
            prática com compromisso pela transparência, eficiência e segurança jurídica.
          </p>
        </motion.div>

        {/* Cards de serviços */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <ServiceCard {...s} />
            </motion.div>
          ))}
        </div>

        {/* Seção de Modalidades e Agendamento */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16"
        >
          <div className="rounded-2xl p-6 md:p-8 border" style={{ borderColor: `${COLORS.primarySoft}40`, background: '#ffffff' }}>
            <div className="flex items-start gap-4 flex-col md:flex-row md:items-center md:justify-between">
              <div className="max-w-3xl">
                <h3 className="text-2xl font-semibold" style={{ color: COLORS.title }}>Modalidades e Agendamento</h3>
                <p className="mt-2" style={{ color: COLORS.text }}>
                  Cada curso pode ser ofertado <strong>presencialmente</strong> ou <strong>on-line</strong>, com carga horária
                  ajustável e <strong>material didático incluso</strong>.
                </p>
                <p className="mt-1" style={{ color: COLORS.text }}>
                  Para agendar uma capacitação ou receber o programa detalhado, entre em contato.
                </p>
              </div>

              <Button
                aria-label="Falar no WhatsApp"
                className="mt-4 md:mt-0 inline-flex items-center gap-2 bg-[#2D6A4F] text-white hover:bg-[#95D5B2]"
                onClick={() => openWhatsApp('Olá! Quero agendar uma capacitação/curso e receber o programa detalhado.')}>
                <FaWhatsapp className="h-5 w-5" aria-hidden />
                Falar no WhatsApp
              </Button>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Services;
