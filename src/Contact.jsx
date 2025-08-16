export default function Contact() {
  return (
    <section
      id="contacto"
      className="scroll-mt-28 mx-auto max-w-6xl px-4 py-16 md:py-20"
    >
      {/* Encabezado */}
      <header className="mb-10 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-800 md:text-4xl">
          Contacto
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-slate-600">
          Estoy siempre abierto a nuevas oportunidades y proyectos.
        </p>
      </header>

      {/* Columna izquierda: tarjetas de datos */}
      <div className="grid grid-cols-1">
        <section
          aria-labelledby="datos-contacto-title"
          className="rounded-3xl border border-emerald-200/60 bg-white p-6"
        >
          <h3
            id="datos-contacto-title"
            className="text-xl font-bold text-slate-800"
          >
            Datos de contacto
          </h3>

          {/* Email */}
          <article className="mt-4 rounded-2xl border border-emerald-100 bg-white p-4 shadow-sm">
            <header className="mb-1 flex items-center gap-2">
              <span
                aria-hidden="true"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50"
              >
                ✉️
              </span>
              <h4 className="text-base font-semibold text-slate-800">Email</h4>
            </header>
            <p>
              <a
                href="mailto:mamanisergioomar@gmail.com"
                className="font-semibold text-emerald-700 underline underline-offset-4 hover:text-emerald-800"
              >
                mamanisergioomar@gmail.com
              </a>
            </p>
          </article>

          {/* Teléfono */}
          <article className="mt-4 rounded-2xl border border-emerald-100 bg-white p-4 shadow-sm">
            <header className="mb-1 flex items-center gap-2">
              <span
                aria-hidden="true"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50"
              >
                📞
              </span>
              <h4 className="text-base font-semibold text-slate-800">
                Teléfono
              </h4>
            </header>
            <p className="text-slate-700">+54 9 1138327447</p>
          </article>

          {/* Ubicación + mapa */}
          <article className="mt-4 rounded-2xl border border-emerald-100 bg-white p-4 shadow-sm">
            <header className="mb-1 flex items-center gap-2">
              <span
                aria-hidden="true"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50"
              >
                📍
              </span>
              <h4 className="text-base font-semibold text-slate-800">
                Ubicación
              </h4>
            </header>
            <p className="text-slate-700"> Argentina-Bs As(CABA)</p>

            {/* Mapa (placeholder) */}
            <figure className="mt-3">
              <div className="flex h-48 w-full items-center justify-center rounded-xl border border-emerald-100 bg-emerald-50 text-sm font-medium text-emerald-700">
                Mapa
              </div>
              <figcaption className="mt-2 text-xs text-slate-500">
                OpenStreetMap (placeholder)
              </figcaption>
            </figure>
          </article>
        </section>
      </div>

      {/* Pie (opcional): redes sociales */}
      <footer className="mt-12">
        <ul aria-label="Redes" className="flex justify-center gap-3">
          <li>
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:shadow"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:shadow"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:shadow"
            >
              Instagram
            </a>
          </li>
        </ul>
      </footer>
    </section>
  );
}
