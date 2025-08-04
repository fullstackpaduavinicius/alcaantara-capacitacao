import { useEffect } from 'react'
import Hero from '../sections/Hero'
import AboutPreview from '../sections/AboutPreview'
import BlogPreview from '../sections/BlogPreview'
import CTA from '../sections/CTA'

const Home = () => {
  // Efeito para rolar para o topo quando a página é carregada
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Adiciona um scroll suave
    })
  }, []) // O array vazio garante que isso só execute uma vez quando o componente montar

  return (
    <>
      <Hero />
      <AboutPreview />
      <BlogPreview />
      <CTA />
    </>
  )
}

export default Home