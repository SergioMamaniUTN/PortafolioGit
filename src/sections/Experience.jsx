// Experience.jsx
export default function Experience() {
  return (
    <section
      id="experiencia"
      className="scroll-mt-28 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 md:py-20"
    >
      {/* Título */}
      <header className="mb-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
          Trayectoria profesional
        </h2>
      </header>

      {/* Timeline */}
      <ol className="relative space-y-8 border-l-2 border-emerald-200 pl-8">
        {/* Educación — UTN FRBA */}
        <li className="relative">
          {/* Bullet/ícono centrado en la línea */}
          <span
            aria-hidden="true"
            className="absolute -left-6 top-1 grid size-10 place-items-center rounded-full bg-emerald-600 text-white shadow-md ring-4 ring-emerald-100"
          >
            🎓
          </span>

          <article className="rounded-3xl border border-emerald-100/60 bg-white p-6 sm:p-8 shadow-sm transition-shadow hover:shadow-md">
            <header className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-slate-900">
                  Ingeniería en Sistemas
                </h3>
                <p className="mt-0.5 font-medium text-slate-600">
                  UTN FRBA — Buenos Aires, Argentina
                </p>
              </div>

              <aside>
                <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                  En curso
                </span>
              </aside>
            </header>

            <div className="mt-3 text-slate-700 leading-relaxed">
              <p>
                Formación universitaria en informática y programación. Enfoque
                en fundamentos, resolución de problemas y buenas prácticas.
              </p>
            </div>
          </article>
        </li>

        {/* Curso Udemy */}
        <li className="relative">
          <span
            aria-hidden="true"
            className="absolute -left-6 top-1 grid size-10 place-items-center rounded-full bg-emerald-600 text-white shadow-md ring-4 ring-emerald-100"
          >
            📘
          </span>

          <article className="rounded-3xl border border-emerald-100/60 bg-white p-6 sm:p-8 shadow-sm transition-shadow hover:shadow-md">
            <header className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-slate-900">
                  Frontend en Udemy
                </h3>
                <p className="mt-0.5 font-medium text-slate-600">
                  Curso online
                </p>
              </div>

              <aside className="whitespace-nowrap">
                <span className="inline-flex items-center rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
                  <time dateTime="2024-12">Diciembre 2024</time> · Completado
                </span>
              </aside>
            </header>

            <div className="mt-3 text-slate-700 leading-relaxed">
              <p>
                Contenidos de HTML, CSS y JavaScript con ejercicios prácticos y
                proyectos introductorios.
              </p>
            </div>
          </article>
        </li>

        {/* Proyectos personales */}
        <li className="relative">
          <span
            aria-hidden="true"
            className="absolute -left-6 top-1 grid size-10 place-items-center rounded-full bg-emerald-600 text-white shadow-md ring-4 ring-emerald-100"
          >
            🛠️
          </span>

          <article className="rounded-3xl border border-emerald-100/60 bg-white p-6 sm:p-8 shadow-sm transition-shadow hover:shadow-md">
            <header className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-slate-900">
                  Proyectos personales
                </h3>
                <p className="mt-0.5 font-medium text-slate-600">En progreso</p>
              </div>
            </header>

            <div className="mt-3 text-slate-700 leading-relaxed">
              <p>
                Construyendo una réplica de una página web para practicar
                maquetado, componentes y buenas prácticas.
              </p>
            </div>
          </article>
        </li>
      </ol>

      {/* CTA inferior */}
      <footer className="mt-12">
        <nav aria-label="Más información" className="flex justify-center">
          <ul className="flex gap-3">
            <li>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:-translate-y-0.5 hover:bg-emerald-50 hover:shadow-md"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:-translate-y-0.5 hover:bg-emerald-50 hover:shadow-md"
              >
                GitHub
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    </section>
  );
}
