import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import FeaturedProjects from '@/components/FeaturedProjects'

export default function Home() {
  return (
    <div className="animate-fade-in">
      <Hero />
      <Skills />
      <FeaturedProjects />
    </div>
  )
}