import { useEffect, useMemo, useState } from "react"

type Props = {
  images: string[]
  altBase?: string
  className?: string
}

export function ImageCarousel({ images, altBase = "Preview", className = "" }: Props) {
  const safeImages = useMemo(() => images?.filter(Boolean) ?? [], [images])
  const [index, setIndex] = useState(0)
  const [isZoomOpen, setIsZoomOpen] = useState(false)

  const canNavigate = safeImages.length > 1

  function prev() {
    setIndex((i) => (i - 1 + safeImages.length) % safeImages.length)
  }

  function next() {
    setIndex((i) => (i + 1) % safeImages.length)
  }

  function openZoom() {
    setIsZoomOpen(true)
  }

  function closeZoom() {
    setIsZoomOpen(false)
  }

  // Ajusta index se a lista mudar
  useEffect(() => {
    if (index > safeImages.length - 1) setIndex(0)
  }, [index, safeImages.length])

  // Bloqueia scroll do body quando o modal está aberto
  useEffect(() => {
    if (!isZoomOpen) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = prevOverflow
    }
  }, [isZoomOpen])

  // Teclas: setas navegam, ESC fecha (no modal)
  useEffect(() => {
    if (!safeImages.length) return

    function onKeyDown(e: KeyboardEvent) {
      if (isZoomOpen && e.key === "Escape") {
        e.preventDefault()
        closeZoom()
        return
      }

      if (e.key === "ArrowLeft" && canNavigate) {
        e.preventDefault()
        prev()
      }

      if (e.key === "ArrowRight" && canNavigate) {
        e.preventDefault()
        next()
      }
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isZoomOpen, canNavigate, safeImages.length])

  if (safeImages.length === 0) return null

  const currentSrc = safeImages[index]

  return (
    <div className={`w-full ${className}`}>
      {/* CARROSSEL */}
      <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-zinc-900 dark:bg-zinc-950">
        <button
          type="button"
          onClick={openZoom}
          className="group block w-full text-left"
          aria-label="Abrir imagem em tela cheia"
          title="Clique para ampliar"
        >
          <div className="aspect-video w-full bg-zinc-100 dark:bg-zinc-900">
            <img
              src={currentSrc}
              alt={`${altBase} ${index + 1}`}
              className="h-full w-full object-contain"
              loading="lazy"
            />
          </div>

          {/* hint de zoom */}
          <div className="pointer-events-none absolute right-3 top-3 rounded-xl border border-zinc-200 bg-white/90 px-3 py-2 text-xs font-semibold text-zinc-900 shadow-sm opacity-0 backdrop-blur transition group-hover:opacity-100 dark:border-zinc-800 dark:bg-zinc-950/80 dark:text-zinc-100">
            Clique para ampliar
          </div>
        </button>

        {canNavigate ? (
          <>
            <button
              type="button"
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-xl border border-zinc-200 bg-white/90 px-3 py-2 text-sm font-semibold text-zinc-900 shadow-sm backdrop-blur transition hover:bg-white dark:border-zinc-800 dark:bg-zinc-950/80 dark:text-zinc-100 dark:hover:bg-zinc-950"
              aria-label="Imagem anterior"
              title="Anterior"
            >
              ←
            </button>

            <button
              type="button"
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-xl border border-zinc-200 bg-white/90 px-3 py-2 text-sm font-semibold text-zinc-900 shadow-sm backdrop-blur transition hover:bg-white dark:border-zinc-800 dark:bg-zinc-950/80 dark:text-zinc-100 dark:hover:bg-zinc-950"
              aria-label="Próxima imagem"
              title="Próxima"
            >
              →
            </button>

            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full border border-zinc-200 bg-white/90 px-3 py-1 text-xs font-medium text-zinc-900 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80 dark:text-zinc-100">
              {index + 1} / {safeImages.length}
            </div>
          </>
        ) : null}
      </div>

      {/* THUMBNAILS */}
      {canNavigate ? (
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
          {safeImages.map((src, i) => {
            const active = i === index
            return (
              <button
                key={`${src}-${i}`}
                type="button"
                onClick={() => setIndex(i)}
                className={[
                  "shrink-0 overflow-hidden rounded-xl border transition",
                  active
                    ? "border-zinc-900 dark:border-zinc-100"
                    : "border-zinc-200 dark:border-zinc-900",
                ].join(" ")}
                aria-label={`Ir para imagem ${i + 1}`}
                title={`Imagem ${i + 1}`}
              >
                <img
                  src={src}
                  alt={`${altBase} miniatura ${i + 1}`}
                  className="h-16 w-28 object-cover"
                  loading="lazy"
                />
              </button>
            )
          })}
        </div>
      ) : null}

      {/* MODAL FULLSCREEN (ZOOM) */}
{isZoomOpen ? (
  <div
    className="fixed inset-0 z-[9999] bg-black/85"
    role="dialog"
    aria-modal="true"
    aria-label="Imagem ampliada"
    onMouseDown={(e) => {
      if (e.target === e.currentTarget) closeZoom()
    }}
  >
    <div className="flex h-full w-full items-center justify-center p-4">
      <div className="relative">
        {/* Botão fechar */}
        <button
          type="button"
          onClick={closeZoom}
          className="absolute -top-12 right-0 rounded-xl border border-zinc-700 bg-black/50 px-3 py-2 text-sm font-semibold text-white backdrop-blur transition hover:bg-black/70"
          aria-label="Fechar"
          title="Fechar (Esc)"
        >
          Fechar ✕
        </button>

        {/* Imagem ampliada (SEM aspect fixo) */}
        <img
          src={currentSrc}
          alt={`${altBase} ampliada ${index + 1}`}
          className="max-h-[95vh] max-w-[95vw] object-contain rounded-2xl border border-zinc-700 bg-black/20"
        />

        {/* Controles (não roubam área da imagem) */}
        <div className="mt-3 flex items-center justify-between gap-3 text-white">
          <div className="text-xs opacity-80">
            {index + 1} / {safeImages.length} — Use ← → para navegar • Esc para fechar
          </div>

          {canNavigate ? (
            <div className="flex gap-2">
              <button
                type="button"
                onClick={prev}
                className="rounded-xl border border-zinc-700 bg-black/50 px-3 py-2 text-sm font-semibold backdrop-blur transition hover:bg-black/70"
                aria-label="Anterior"
                title="Anterior (←)"
              >
                ←
              </button>
              <button
                type="button"
                onClick={next}
                className="rounded-xl border border-zinc-700 bg-black/50 px-3 py-2 text-sm font-semibold backdrop-blur transition hover:bg-black/70"
                aria-label="Próxima"
                title="Próxima (→)"
              >
                →
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  </div>
) : null}
    </div>
  )
}
