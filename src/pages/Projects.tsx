import { Link } from "react-router-dom"
import { projects } from "../data/projects"

export function Projects() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Projetos</h1>
        <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
          Seleção de projetos com foco em engenharia, dados e impacto no negócio.
        </p>
      </div>

      <div className="grid gap-4">
        {projects.map((p) => (
          <Link
            key={p.slug}
            to={`/projetos/${p.slug}`}
            className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-zinc-900 dark:bg-zinc-950"
          >
            <div className="text-lg font-semibold">{p.title}</div>
            <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              {p.subtitle}
            </div>
            <p className="mt-3 text-sm text-zinc-700 dark:text-zinc-300">
              {p.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}
