import { useLang } from "../lang/useLang";

export default function Projects() {
  const { t } = useLang();

  return (
    <section
      id="trabajos"
      className="scroll-mt-28 mx-auto max-w-6xl px-4 py-16 md:py-20"
    >
      {/* ===== TÍTULO ===== */}
      <header className="mb-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-800 md:text-4xl dark:text-slate-100">
          {t("projects.title")}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
          {t("projects.subtitle")}
        </p>
      </header>

      {/* ===== GRID DE TARJETAS ===== */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* ===== TARJETA 1 — EN PROGRESO ===== */}
        <article
          className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-emerald-200/60 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md
                            dark:border-slate-700 dark:bg-slate-800 dark:hover:shadow-slate-700/50"
        >
          {/* Etiqueta “Vista Previa” */}
          <span
            className="pointer-events-none absolute left-3 top-3 z-10 inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700
                           dark:border-emerald-500/30 dark:bg-emerald-900/20 dark:text-emerald-300"
          >
            &lt;/&gt; {t("projects.preview")}
          </span>

          {/* Imagen / Placeholder */}
          <figure className="relative">
            {/* 👉 cuando tengas la imagen, ponela en /public/projects/proyecto-1.jpg y descomentá la etiqueta <img> */}
            {/* <img
              src="/projects/proyecto-1.jpg"
              alt="Proyecto personal — vista previa"
              className="h-56 w-full object-cover"
            /> */}
            <div
              className="flex h-56 w-full items-center justify-center bg-emerald-50 text-sm font-medium text-emerald-700
                            dark:bg-emerald-900/20 dark:text-emerald-300"
            >
              {t("projects.inProgress")}
            </div>
          </figure>

          {/* Contenido */}
          <div className="flex flex-1 flex-col justify-between p-5">
            <div>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100">
                {t("projects.project1Title")}
              </h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300">
                {t("projects.project1Desc")}
              </p>

              {/* Tecnologías */}
              <div className="mt-4">
                <p className="text-sm font-semibold text-slate-600 dark:text-slate-400">
                  {t("projects.techsLabel")}
                </p>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {[
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "React",
                    "Tailwind",
                    "Bootstrap",
                  ].map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700
                                 dark:border-emerald-500/30 dark:bg-emerald-900/20 dark:text-emerald-300"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Acciones (deshabilitadas por ahora) */}
            <footer className="mt-5 flex gap-3">
              <span
                className="inline-flex cursor-not-allowed items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-400
                               dark:border-slate-600 dark:bg-slate-800 dark:text-slate-500"
              >
                {t("projects.demoSoon")}
              </span>
              <span
                className="inline-flex cursor-not-allowed items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-400
                               dark:border-slate-600 dark:bg-slate-800 dark:text-slate-500"
              >
                {t("projects.codeSoon")}
              </span>
            </footer>
          </div>
        </article>
      </div>
    </section>
  );
}
