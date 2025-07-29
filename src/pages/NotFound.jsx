import { Button } from '@/components/ui/Button'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center py-12 px-4">
      <div className="max-w-md mx-auto">
        <h1 className="text-9xl font-bold text-primary-600 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Página não encontrada</h2>
        <p className="text-lg text-gray-600 mb-8">
          A página que você está procurando pode ter sido removida ou não está disponível no momento.
        </p>
        <Button variant="primary" onClick={() => navigate('/')}>
          Voltar para a página inicial
        </Button>
      </div>
    </div>
  )
}

export default NotFound