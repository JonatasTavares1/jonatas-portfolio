export function Contact() {
  return (
    <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-900 dark:bg-zinc-950">
      <h1 className="text-2xl font-bold tracking-tight">Contato</h1>
      <p className="mt-3 text-sm text-zinc-700 dark:text-zinc-300">
        Email: <a href="mailto:seuemail@exemplo.com">jonatastavares2015@gmail.com</a>
      </p>
      <p className="mt-3 text-sm text-zinc-700 dark:text-zinc-300">
        
        Telefone: <a target="_blank" href="https://wa.me/5561992322962?text=Ol%C3%A1%2C%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20saber%20mais%20sobre%20seus%20produtos...">(61) 99232-2962</a>
      </p>
    </div>
  )
}