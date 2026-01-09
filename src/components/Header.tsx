import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { ThemeToggle } from "./ThemeToggle"

const linkBase =
  "rounded-lg px-3 py-2 text-sm font-medium transition hover:bg-zinc-100 dark:hover:bg-zinc-900"
const linkActive = "bg-zinc-100 dark:bg-zinc-900"

function NavItem({
  to,
  label,
  onClick,
}: {
  to: string
  label: string
  onClick?: () => void
}) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `${linkBase} ${isActive ? linkActive : ""}`
      }
    >
      {label}
    </NavLink>
  )
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  function toggleMobile() {
    setMobileOpen((v) => !v)
  }

  function closeMobile() {
    setMobileOpen(false)
  }

  useEffect(() => {
    if (!mobileOpen) return

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") closeMobile()
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [mobileOpen])

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-zinc-50/80 backdrop-blur dark:border-zinc-900 dark:bg-zinc-950/80">
      <div className="container-page flex h-16 items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-zinc-900 text-zinc-50 dark:bg-zinc-100 dark:text-zinc-900">
            J
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold">Jonatas</div>
            <div className="text-xs text-zinc-600 dark:text-zinc-400">
              Data Analyst & Dev
            </div>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          <NavItem to="/" label="Home" />
          <NavItem to="/projetos" label="Projetos" />
          <NavItem to="/sobre" label="Sobre" />
          <NavItem to="/contato" label="Contato" />
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <ThemeToggle />

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={toggleMobile}
            className="inline-flex items-center rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm font-semibold text-zinc-900 shadow-sm transition hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800 md:hidden"
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? "Fechar" : "Menu"}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen ? (
        <div className="md:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/30"
            onClick={closeMobile}
            aria-hidden="true"
          />

          {/* Panel */}
          <div className="fixed left-0 right-0 top-16 z-50 border-b border-zinc-200 bg-zinc-50 dark:border-zinc-900 dark:bg-zinc-950">
            <div className="container-page flex flex-col gap-1 py-3">
              <NavItem to="/" label="Home" onClick={closeMobile} />
              <NavItem to="/projetos" label="Projetos" onClick={closeMobile} />
              <NavItem to="/sobre" label="Sobre" onClick={closeMobile} />
              <NavItem to="/contato" label="Contato" onClick={closeMobile} />
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}
