'use client'

import { useState, useEffect } from 'react'
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react'
import projectsData from '@/data/projects.json'

interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  github: string
  demo: string
}

export default function FeaturedProjects() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [projects] = useState<Project[]>(projectsData.sort((a, b) => b.id - a.id))
  const itemsPerPage = 3

  const maxIndex = Math.max(0, projects.length - itemsPerPage)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [maxIndex])

  const visibleProjects = projects.slice(currentIndex, currentIndex + itemsPerPage)

  return (
    <section className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Projets Récents
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Découvrez quelques-uns de mes projets les plus récents et leurs technologies.
          </p>
        </div>

        <div className="relative mt-16 sm:mt-20">
          {/* Boutons de navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
            aria-label="Projet précédent"
          >
            <ChevronLeft className="h-6 w-6 text-gray-900" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
            aria-label="Projet suivant"
          >
            <ChevronRight className="h-6 w-6 text-gray-900" />
          </button>

          {/* Carrousel */}
          <div className="overflow-hidden">
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                {visibleProjects.map((project) => (
                  <div
                    key={project.id}
                    className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80 transition-all duration-500"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 -z-10 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                    <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

                    <h3 className="text-lg font-semibold leading-6 text-white">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-gray-300">
                      {project.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center rounded-md bg-gray-50/10 px-2 py-1 text-xs font-medium text-gray-300 ring-1 ring-inset ring-gray-500/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="mt-6 flex gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-medium text-white hover:text-primary transition-colors"
                      >
                        <Github className="h-4 w-4" />
                        Code
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-medium text-white hover:text-primary transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Demo
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Indicateurs */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  currentIndex === index ? 'w-8 bg-primary' : 'w-2 bg-gray-300'
                }`}
                aria-label={`Aller à la page ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}