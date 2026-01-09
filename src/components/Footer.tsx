export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-zinc-200 py-10 dark:border-zinc-900">
      <div className="container-page flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="text-sm text-zinc-600 dark:text-zinc-400">
          © {year} Jonatas Santos. Todos os direitos reservados.
        </div>

        <div className="flex flex-wrap gap-4 text-sm">
          <a className="text-zinc-700 dark:text-zinc-300" href="https://github.com/JonatasTavares1" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="text-zinc-700 dark:text-zinc-300" href="https://www.linkedin.com/in/jonatastavares1/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="text-zinc-700 dark:text-zinc-300" href="jonatastavares2015@gmail.com">
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
