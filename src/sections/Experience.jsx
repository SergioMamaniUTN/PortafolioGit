import { useLang } from "../lang/useLang";

export default function Experience() {
  const { t } = useLang();

  return (
    <section
      id="experiencia"
      className="scroll-mt-28 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 md:py-20"
    >
      {/* Título */}
      <header className="mb-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
          {t("experience.title")}
        </h2>
      </header>

      {/* Timeline */}
      <ol className="relative space-y-8 border-l-2 border-emerald-200 pl-8 dark:border-emerald-800">
        {/* Educación — UTN FRBA */}
        <li className="relative">
          <span
            aria-hidden="true"
            className="absolute -left-6 top-1 grid size-10 place-items-center rounded-full bg-emerald-600 text-white shadow-md ring-4 ring-emerald-100 dark:ring-emerald-900"
          >
            🎓
          </span>

          <article
            className="rounded-3xl border border-emerald-100/60 bg-white p-6 sm:p-8 shadow-sm transition-shadow hover:shadow-md
                             dark:border-slate-700 dark:bg-slate-800 dark:hover:shadow-slate-700/50"
          >
            <header className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                  {t("experience.utn.degree")}
                </h3>
                <p className="mt-0.5 font-medium text-slate-600 dark:text-slate-400">
                  {t("experience.utn.location")}
                </p>
              </div>

              <aside>
                <span
                  className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700
                                 dark:bg-emerald-900/40 dark:text-emerald-300"
                >
                  {t("experience.status.inProgress")}
                </span>
              </aside>
            </header>

            <div className="mt-3 text-slate-700 leading-relaxed dark:text-slate-300">
              <p>{t("experience.utn.desc")}</p>
            </div>
          </article>
        </li>

        {/* Curso Udemy */}
        <li className="relative">
          <span
            aria-hidden="true"
            className="absolute -left-6 top-1 grid size-10 place-items-center rounded-full bg-emerald-600 text-white shadow-md ring-4 ring-emerald-100 dark:ring-emerald-900"
          >
            📘
          </span>

          <article
            className="rounded-3xl border border-emerald-100/60 bg-white p-6 sm:p-8 shadow-sm transition-shadow hover:shadow-md
                             dark:border-slate-700 dark:bg-slate-800 dark:hover:shadow-slate-700/50"
          >
            <header className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                  {t("experience.udemy.title")}
                </h3>
                <p className="mt-0.5 font-medium text-slate-600 dark:text-slate-400">
                  {t("experience.udemy.mode")}
                </p>
              </div>

              <aside className="whitespace-nowrap">
                <span
                  className="inline-flex items-center rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700
                                 dark:bg-amber-900/30 dark:text-amber-300"
                >
                  <time dateTime="2024-12">{t("experience.udemy.date")}</time> ·{" "}
                  {t("experience.status.completed")}
                </span>
              </aside>
            </header>

            <div className="mt-3 text-slate-700 leading-relaxed dark:text-slate-300">
              <p>{t("experience.udemy.desc")}</p>
            </div>
          </article>
        </li>

        {/* Proyectos personales */}
        <li className="relative">
          <span
            aria-hidden="true"
            className="absolute -left-6 top-1 grid size-10 place-items-center rounded-full bg-emerald-600 text-white shadow-md ring-4 ring-emerald-100 dark:ring-emerald-900"
          >
            🛠️
          </span>

          <article
            className="rounded-3xl border border-emerald-100/60 bg-white p-6 sm:p-8 shadow-sm transition-shadow hover:shadow-md
                             dark:border-slate-700 dark:bg-slate-800 dark:hover:shadow-slate-700/50"
          >
            <header className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                  {t("experience.projects.title")}
                </h3>
                <p className="mt-0.5 font-medium text-slate-600 dark:text-slate-400">
                  {t("experience.status.inProgress")}
                </p>
              </div>
            </header>

            <div className="mt-3 text-slate-700 leading-relaxed dark:text-slate-300">
              <p>{t("experience.projects.desc")}</p>
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
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:-translate-y-0.5 hover:bg-emerald-50 hover:shadow-md
                           dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
              >
                {t("experience.links.linkedin")}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:-translate-y-0.5 hover:bg-emerald-50 hover:shadow-md
                           dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
              >
                {t("experience.links.github")}
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    </section>
  );
}
