import { Code, Database, Globe } from 'lucide-react'

const skills = [
  {
    name: 'Frontend',
    description: 'nextjs,tailwind,angular',
    icon: Code,
  },
  {
    name: 'Backend',
    description: 'mongo,express,django,postgresql',
    icon: Database,
  },
  {
    name: 'Langages',
    description: 'html,css,js,py,php',
    icon: Globe,
  },  
]

export default function Skills() {
  return (
    <section className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Mes Compétences
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Technologies et outils que je maîtrise pour créer des applications modernes et performantes.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-5xl sm:mt-20 lg:mt-24">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => (
              <div 
                key={skill.name} 
                className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="rounded-lg bg-primary/10 p-4 mb-4">
                  <skill.icon className="h-8 w-8 text-primary" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold leading-7 text-gray-900 mb-2">
                  {skill.name}
                </h3>
                <div className="text-base leading-7 text-gray-600">
                  <img 
                    src={`https://skillicons.dev/icons?i=${skill.description}`} 
                    alt={`${skill.name} skills`}
                    className="mx-auto"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}