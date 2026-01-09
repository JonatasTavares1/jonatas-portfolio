import { Link, useParams } from "react-router-dom"
import { projects } from "../data/projects"
import { ImageCarousel } from "../components/ImageCarousel"

export function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <div className="rounded-2xl border border-zinc-200 bg-white p-8 dark:border-zinc-900 dark:bg-zinc-950">
        <h1 className="text-xl font-semibold">Projeto não encontrado</h1>
        <div className="mt-5">
          <Link className="text-sm font-semibold" to="/projetos">
            ← Voltar para Projetos
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <Link className="text-sm font-semibold" to="/projetos">
          ← Voltar
        </Link>
        <h1 className="mt-3 text-3xl font-bold tracking-tight">{project.title}</h1>
        <p className="mt-2 text-zinc-700 dark:text-zinc-300">{project.subtitle}</p>
      </div>

      <ImageCarousel
          images={project.image}
          altBase={`Preview do projeto ${project.title}`}
          className="mt-6"
        />

      <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-900 dark:bg-zinc-950">
        <h2 className="text-lg font-semibold">Descrição</h2>
        <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
          {project.description}
        </p>

        <h3 className="mt-6 text-sm font-semibold">Highlights</h3>
        <ul className="mt-2 list-inside list-disc text-sm text-zinc-700 dark:text-zinc-300">
          {project.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.links?.length ? (
              <div className="mt-6 flex flex-wrap gap-3">
                {project.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl bg-zinc-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            ) : null}
        </div>
      </div>
    </div>
  )
}
