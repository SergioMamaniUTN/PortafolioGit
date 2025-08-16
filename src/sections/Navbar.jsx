export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-emerald-100/60 bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Menu de anclas */}
        <nav className="mx-auto flex items-center justify-center gap-2 rounded-full bg-slate-800/90 px-6 py-3 shadow-xl backdrop-blur-md">
          {/* Inicio (activo de ejemplo) */}
          <a
            href="#inicio"
            aria-current="page"
            className="flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-white transition
                     hover:-translate-y-0.5 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-teal-500 hover:text-white
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300
                     aria-[current=page]:bg-gradient-to-r aria-[current=page]:from-emerald-500 aria-[current=page]:to-teal-500"
          >
            Inicio
          </a>

          <a
            href="#acerca"
            className="flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-white transition
                     hover:-translate-y-0.5 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-teal-500 hover:text-white
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
          >
            Acerca de mi
          </a>

          <a
            href="#trabajos"
            className="flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-white transition
                     hover:-translate-y-0.5 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-teal-500 hover:text-white
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
          >
            Trabajos
          </a>

          <a
            href="#experiencia"
            className="flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-white transition
                     hover:-translate-y-0.5 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-teal-500 hover:text-white
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
          >
            Experiencia
          </a>

          <a
            href="#contacto"
            className="flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-white transition
                     hover:-translate-y-0.5 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-teal-500 hover:text-white
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
          >
            Contacto
          </a>
        </nav>

        {/* Controles (sin lógica aún) */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            id="theme-toggle"
            aria-label="Cambiar tema"
            className="rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-700 transition
                     hover:-translate-y-0.5 hover:shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
          >
            🌓
          </button>
          <button
            type="button"
            id="lang-toggle"
            aria-label="Cambiar idioma"
            className="rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-700 transition
                     hover:-translate-y-0.5 hover:shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
          >
            ES
          </button>
        </div>
      </div>
    </header>
  );
}
