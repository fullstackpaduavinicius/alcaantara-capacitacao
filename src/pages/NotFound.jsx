// src/pages/NotFound.jsx → Página de Cursos ajustada com scroll-to-top
import { useMemo, useState, useEffect } from 'react'
import { Button } from '@/components/ui/Button'
import { useNavigate } from 'react-router-dom'

const CATEGORIES = [
  { id: 'todas', label: 'Todas' },
  { id: 'lei-14133', label: 'Lei 14.133/2021' },
  { id: 'controle-interno', label: 'Controle Interno' },
  { id: 'habilitacao', label: 'Habilitação' },
  { id: 'srp', label: 'Sistema de Registro de Preços (SRP)' },
  { id: 'governanca', label: 'Governança & Riscos' },
]

const COURSES = [
  {
    id: 'fase-preparatoria-14133',
    title: 'Fase Preparatória das Contratações (Lei 14.133/2021)',
    category: 'lei-14133',
    duration: '16h',
    modality: 'In Company ou Turma Aberta',
    level: 'Intermediário',
    short:
      'PCA, DFD, ETP, TR e Mapa de Riscos: da teoria à implementação com modelos e checklists.',
    bullets: ['PCA e DFD na prática', 'ETP e TR sem lacunas', 'Mapa de riscos aplicável'],
    audience: 'Comissões de contratação, pregoeiros, gestores e áreas demandantes.',
  },
  {
    id: 'gestao-fiscalizacao-contratos',
    title: 'Gestão e Fiscalização de Contratos Administrativos',
    category: 'lei-14133',
    duration: '12h',
    modality: 'In Company',
    level: 'Intermediário',
    short:
      'Responsabilidades legais, controles, registros e prevenção de falhas durante a execução contratual.',
    bullets: ['Papéis e responsabilidades', 'Planos de fiscalização', 'Evidências e registros'],
    audience: 'Gestores, fiscais e assessorias jurídicas.',
  },
  {
    id: 'srp-pratico',
    title: 'SRP na Prática — Atas, Caronas e Planejamento',
    category: 'srp',
    duration: '8h',
    modality: 'Turma Aberta',
    level: 'Intermediário',
    short:
      'Estudo jurídico e prático do SRP com foco em planejamento de demanda e segurança jurídica.',
    bullets: ['Atas de registro', 'Caronas', 'Planejamento da demanda'],
    audience: 'Pregoeiros, equipes de compras e controle interno.',
  },
  {
    id: 'dispensa-inexigibilidade',
    title: 'Dispensa e Inexigibilidade — Hipóteses, Riscos e Documentação',
    category: 'lei-14133',
    duration: '10h',
    modality: 'In Company',
    level: 'Intermediário',
    short:
      'Como instruir processos de contratação direta com segurança: hipóteses, motivação e prova documental.',
    bullets: ['Hipóteses legais', 'Motivação robusta', 'Dossiê documental'],
    audience: 'Assessorias jurídicas, controle interno e áreas demandantes.',
  },
  {
    id: 'controle-interno-contratacoes',
    title: 'Controle Interno nas Contratações Públicas',
    category: 'controle-interno',
    duration: '12h',
    modality: 'In Company',
    level: 'Intermediário/Avançado',
    short:
      'Papel estratégico do controle interno: prevenção de riscos, responsabilização e governança.',
    bullets: ['Mapeamento de riscos', 'Trilhas de auditoria', 'Planos de melhoria'],
    audience: 'Unidades de controle interno e auditoria.',
  },
  {
    id: 'habilitacao-licitacoes',
    title: 'Habilitação nas Contratações — Pontos Críticos',
    category: 'habilitacao',
    duration: '8h',
    modality: 'Turma Aberta ou In Company',
    level: 'Intermediário',
    short:
      'Critérios, documentos e boas práticas para conduzir a fase de habilitação com segurança e eficiência.',
    bullets: ['Documentos essenciais', 'Riscos recorrentes', 'Regularização e MPEs'],
    audience: 'Comissões, pregoeiros e assessorias jurídicas.',
  },
  {
    id: 'governanca-riscos',
    title: 'Governança, Controles e Gestão de Riscos na Administração Pública',
    category: 'governanca',
    duration: '12h',
    modality: 'In Company',
    level: 'Intermediário',
    short:
      'Metodologias e práticas para estruturar controles internos e mapear riscos de ponta a ponta.',
    bullets: ['Mapa e matriz de riscos', 'Planos de ação', 'Indicadores e governança'],
    audience: 'Alta administração, planejamento, controle e auditoria.',
  },
]

function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-secondary/10 text-secondary-dark px-3 py-1 text-xs font-medium">
      {children}
    </span>
  )
}

function CourseCard({ course, onPropose }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex flex-wrap items-start gap-3 mb-4">
        <Badge>{course.duration}</Badge>
        <Badge>{course.modality}</Badge>
        <Badge>{course.level}</Badge>
      </div>

      <h3 className="text-xl md:text-2xl font-serif font-bold text-secondary-dark">
        {course.title}
      </h3>
      <p className="mt-2 text-gray-700">{course.short}</p>

      {course.bullets?.length > 0 && (
        <ul className="mt-4 grid gap-2 text-sm text-gray-700">
          {course.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-4 text-sm text-gray-600">
        <strong>Público-alvo:</strong> {course.audience}
      </div>

      <div className="mt-6">
        <button
          onClick={() => onPropose(course)}
          className="bg-green-600 text-white font-medium py-2 px-4 rounded-lg shadow-md hover:bg-green-700 transition-all"
        >
          Solicitar proposta 
        </button>
      </div>
    </div>
  )
}

const NotFound = () => {
  const navigate = useNavigate()
  const [q, setQ] = useState('')
  const [cat, setCat] = useState('todas')

  // 👇 Sempre rola para o topo ao montar a página
  useEffect(() => {
    // 'auto' garante salto imediato; se quiser animar, use 'smooth'
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [])

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase()
    return COURSES.filter((c) => {
      const inCat = cat === 'todas' || c.category === cat
      if (!inCat) return false
      if (!term) return true
      const hay = `${c.title} ${c.short} ${c.audience}`.toLowerCase()
      return hay.includes(term)
    })
  }, [q, cat])

  const handlePropose = (course) => {
    navigate(`/contato?assunto=Proposta%20In%20Company%20-%20${encodeURIComponent(course.title)}`)
  }

  return (
    <div className="section-padding">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-secondary-dark">
            Capacitação e Consultoria para a Gestão Pública
          </h1>
          <p className="mt-4 text-lg text-gray-1000">
            Fortalecemos a administração pública com conhecimento técnico e boas práticas.
            Mais de 15 anos capacitando servidores em todo o Brasil.
          </p>
          <div className="mt-6 flex justify-center">
            <button
              onClick={() => navigate('/contato')}
              className="bg-green-600 text-white font-medium py-2 px-6 rounded-lg shadow-md hover:bg-green-700 transition-all"
            >
              Falar com a equipe
            </button>
          </div>
        </div>

        {/* Busca e categorias */}
        <div className="mt-10 grid gap-6">
          <div className="flex flex-col md:flex-row items-stretch gap-3">
            <input
              type="text"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Busque por curso, tema ou palavra-chave…"
              className="w-full rounded-lg border-gray-300 focus:border-primary focus:ring-primary"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                onClick={() => setCat(c.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  cat === c.id
                    ? 'bg-primary text-white shadow-sm'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Lista de cursos */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filtered.map((course) => (
            <CourseCard key={course.id} course={course} onPropose={handlePropose} />
          ))}
        </div>

        {/* Call-to-Action final */}
        <div className="mt-12 rounded-2xl bg-secondary p-8 md:p-10 text-white">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold">
                Precisa de uma trilha personalizada para sua equipe?
              </h2>
              <p className="mt-3">
                Montamos um plano de capacitação sob medida: diagnóstico, ementas moduladas,
                materiais atualizados e certificação.
              </p>
            </div>
            <div className="flex md:justify-end">
              <Button
                variant="primary"
                onClick={() => navigate('/contato?assunto=Trilha%20de%20Capacita%C3%A7%C3%A3o')}
              >
                Solicitar proposta personalizada
              </Button>
            </div>
          </div>
        </div>

        {/* Rodapé de autoridade */}
        <div className="mt-8 text-center text-sm text-gray-600">
          Alcantara Capacitação — desde 2010, com equipe de especialistas e material didático atualizado.
        </div>
      </div>
    </div>
  )
}

export default NotFound
