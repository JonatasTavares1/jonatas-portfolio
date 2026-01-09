import { Link } from "react-router-dom"
import { projects } from "../data/projects"

export function Home() {
  return (
    <div className="flex flex-col gap-10">
      <section className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-900 dark:bg-zinc-950">
        <div className="avatar-gradient">
            <img
              src="https://github.com/JonatasTavares1.png"
              alt="Foto do Jonatas"
              className="h-full w-full rounded-full object-cover"
            />
        </div><br />
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
              Jonatas Santos — Analista de Dados & Desenvolvedor Full Stack
            </h1>
<br />
            <h2 className="text-xl font-semibold">Resumo profissional</h2><br></br>
              <p className="mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                Profissional com atuação estratégica em Tecnologia da Informação e Administração de Processos, com perfil multidisciplinar e foco na entrega de valor por 
                meio de dados, automação e soluções digitais. Possui experiência sólida em análise de dados, desenvolvimento de aplicações web e implantação de dashboards corporativos
                 orientados à tomada de decisão. Especialista em Python e Business Intelligence, com capacidade de conduzir soluções ponta a ponta
                 — desde o levantamento de requisitos e modelagem até a implementação e publicação em ambientes produtivos (SQL, Web e Cloud)
              </p>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                to="/projetos"
                className="rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
              >
                Ver projetos
              </Link>
            </div>
          </div>
      </section>

      <section className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-900 dark:bg-zinc-950">
        <h2 className="text-lg font-semibold">Projeto em destaque</h2>
        <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
          {projects[0]?.title} — {projects[0]?.subtitle}
        </p>
      </section>
    </div>
  )
}

<div className="bg-red-500 text-white p-6 text-2xl font-bold">
  TESTE TAILWIND
</div>
