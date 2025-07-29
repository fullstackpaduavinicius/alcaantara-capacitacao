import { useEffect } from 'react'

export const useScroll = (ref, options) => {
  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn')
        }
      })
    }, options)

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [ref, options])
}