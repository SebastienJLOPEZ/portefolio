import Link from 'next/link'
import { ArrowRight, Download } from 'lucide-react'

export default function Hero() {
  return (
    <section className="py-24 sm:py-32 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl animate-slide-up">
            Développeur Full Stack
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 animate-slide-up">
            Étudiant passionné par la création d'applications web modernes et performantes.
            Je transforme vos idées en solutions digitales innovantes.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 animate-slide-up">
            <a
              href="/CV_Sébastien_LOPEZ.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary transition-colors flex items-center gap-2"
            >
              Télécharger CV
              <Download className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}