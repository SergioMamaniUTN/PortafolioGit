import { useLang } from "../lang/useLang";

const frontend = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "TypeScript",
  "Tailwind",
  "Bootstrap",
];

export default function About() {
  const { t } = useLang();
  const backend = [t("about.inProgress")];
  const tools = [t("about.inProgress")];

  return (
    <section
      id="acerca"
      className="scroll-mt-28 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 md:py-20"
    >
      {/* ====== ENCABEZADO ====== */}
      <header className="text-center">
        <p
          className="mx-auto inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-5 py-2 text-base font-semibold text-emerald-700
                       dark:border-emerald-500/30 dark:bg-emerald-900/20 dark:text-emerald-300"
        >
          {t("about.badge")}
        </p>
        <h2
          className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-slate-900 text-balance
                       dark:text-slate-100"
        >
          {t("about.title")}
        </h2>
        <p
          className="mx-auto mt-3 max-w-3xl text-slate-600 leading-relaxed
                      dark:text-slate-300"
        >
          {t("about.subtitle")}
        </p>
      </header>

      {/* ====== MÉTRICAS (3 tarjetas) ====== */}
      <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {/* Proyectos personales */}
        <li>
          <article
            className="h-24 sm:h-28 flex items-center gap-4 rounded-3xl border border-emerald-100/60 bg-white p-4 shadow-sm
                              dark:border-slate-700 dark:bg-slate-800"
          >
            <div
              className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-lg
                            dark:bg-emerald-900/30 dark:text-emerald-300"
            >
              📁
            </div>
            <div>
              <p className="text-lg font-bold text-slate-900 dark:text-slate-100">
                {t("about.metricProjectsValue")}
              </p>
              <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
                {t("about.metricProjectsLabel")}
              </p>
            </div>
          </article>
        </li>

        {/* Tecnologías */}
        <li>
          <article
            className="h-24 sm:h-28 flex items-center gap-4 rounded-3xl border border-emerald-100/60 bg-white p-4 shadow-sm
                              dark:border-slate-700 dark:bg-slate-800"
          >
            <div
              className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-lg
                            dark:bg-emerald-900/30 dark:text-emerald-300"
            >
              🧠
            </div>
            <div>
              <p className="text-lg font-bold text-slate-900 dark:text-slate-100">
                7
              </p>
              <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
                {t("about.metricTechsLabel")}
              </p>
            </div>
          </article>
        </li>

        {/* Cursos / Formación */}
        <li>
          <article
            className="h-24 sm:h-28 flex items-center gap-4 rounded-3xl border border-emerald-100/60 bg-white p-4 shadow-sm
                              dark:border-slate-700 dark:bg-slate-800"
          >
            <div
              className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-lg
                            dark:bg-emerald-900/30 dark:text-emerald-300"
            >
              🎓
            </div>
            <div>
              <p className="text-lg font-bold text-slate-900 dark:text-slate-100">
                2
              </p>
              <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
                {t("about.metricCoursesLabel")}
              </p>
            </div>
          </article>
        </li>
      </ul>

      {/* ====== ESPECIALIZACIÓN + STACK ====== */}
      <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-[1.2fr_1fr]">
        {/* Especialización */}
        <section
          className="rounded-3xl border border-emerald-200/60 bg-gradient-to-b from-emerald-50/60 to-white p-6 sm:p-8 shadow-sm
                            dark:border-slate-700 dark:from-slate-800/60 dark:to-slate-800"
        >
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
            {t("about.specializationTitle")}
          </h3>
          <p className="mt-2 text-slate-700 leading-relaxed dark:text-slate-300">
            {t("about.specializationText")}
          </p>

          <div className="mt-5 space-y-4">
            {/* Item 1 */}
            <article
              className="rounded-2xl border border-emerald-100/70 bg-white p-4 shadow-sm
                                dark:border-slate-700 dark:bg-slate-800"
            >
              <header className="mb-1 flex items-center gap-2">
                <span
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50
                                 dark:bg-emerald-900/30 dark:text-emerald-300"
                >
                  🧩
                </span>
                <h4 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                  {t("about.card1Title")}
                </h4>
              </header>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                {t("about.card1Text")}
              </p>
            </article>

            {/* Item 2 */}
            <article
              className="rounded-2xl border border-emerald-100/70 bg-white p-4 shadow-sm
                                dark:border-slate-700 dark:bg-slate-800"
            >
              <header className="mb-1 flex items-center gap-2">
                <span
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50
                                 dark:bg-emerald-900/30 dark:text-emerald-300"
                >
                  🎨
                </span>
                <h4 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                  {t("about.card2Title")}
                </h4>
              </header>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                {t("about.card2Text")}
              </p>
            </article>
          </div>
        </section>

        {/* Stack técnico */}
        <section
          className="rounded-3xl border border-emerald-200/60 bg-white p-6 sm:p-8 shadow-sm
                            dark:border-slate-700 dark:bg-slate-800"
        >
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
            {t("about.stackTitle")}
          </h3>
          <p className="mt-2 text-slate-700 dark:text-slate-300">
            {t("about.stackSubtitle")}
          </p>

          {/* Frontend */}
          <h4 className="mt-5 text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
            {t("about.frontendTitle")}
          </h4>
          <ul className="mt-3 flex flex-wrap gap-2">
            {frontend.map((tech) => (
              <li
                key={tech}
                className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700
                           dark:border-emerald-500/30 dark:bg-emerald-900/20 dark:text-emerald-300"
              >
                {tech}
              </li>
            ))}
          </ul>

          {/* Backend (en proceso) */}
          <h4 className="mt-6 text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
            {t("about.backendTitle")}
          </h4>
          <ul className="mt-3 flex flex-wrap gap-2">
            {backend.map((it) => (
              <li
                key={it}
                className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium text-slate-600
                           dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300"
              >
                {it}
              </li>
            ))}
          </ul>

          {/* Herramientas (en proceso) */}
          <h4 className="mt-6 text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
            {t("about.toolsTitle")}
          </h4>
          <ul className="mt-3 flex flex-wrap gap-2">
            {tools.map((it) => (
              <li
                key={it}
                className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium text-slate-600
                           dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300"
              >
                {it}
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* ====== LOGROS + EXPLORANDO ====== */}
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Logros */}
        <section
          className="rounded-3xl border border-emerald-200/60 bg-white p-6 sm:p-8 shadow-sm
                            dark:border-slate-700 dark:bg-slate-800"
        >
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
            {t("about.achievementsTitle")}
          </h3>
          <p className="mt-2 text-slate-700 dark:text-slate-300">
            {t("about.achievementsSubtitle")}
          </p>

          <ul className="mt-4 space-y-4">
            {/* UTN */}
            <li>
              <article
                className="rounded-2xl border border-emerald-100/70 bg-white p-4 shadow-sm
                                  dark:border-slate-700 dark:bg-slate-800"
              >
                <header className="mb-1 flex items-center gap-2">
                  <span className="dark:text-emerald-300">🎓</span>
                  <h4 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                    {t("about.achUTNTitle")}
                  </h4>
                </header>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  {t("about.achUTNText")}
                </p>
              </article>
            </li>

            {/* Udemy */}
            <li>
              <article
                className="rounded-2xl border border-emerald-100/70 bg-white p-4 shadow-sm
                                  dark:border-slate-700 dark:bg-slate-800"
              >
                <header className="mb-1 flex items-center gap-2">
                  <span
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50
                                   dark:bg-emerald-900/30 dark:text-emerald-300"
                  >
                    🧩
                  </span>
                  <h4 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                    {t("about.achUdemyTitle")}
                  </h4>
                </header>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  {t("about.achUdemyText")}
                </p>
              </article>
            </li>

            {/* Portafolio en construcción */}
            <li>
              <article
                className="rounded-2xl border border-emerald-100/70 bg-white p-4 shadow-sm
                                  dark:border-slate-700 dark:bg-slate-800"
              >
                <header className="mb-1 flex items-center gap-2">
                  <span
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50
                                   dark:bg-emerald-900/30 dark:text-emerald-300"
                  >
                    🚀
                  </span>
                  <h4 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                    {t("about.achPortfolioTitle")}
                  </h4>
                </header>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  {t("about.achPortfolioText")}
                </p>
              </article>
            </li>
          </ul>
        </section>

        {/* Explorando */}
        <section
          className="rounded-3xl border border-emerald-200/60 bg-gradient-to-b from-emerald-50/60 to-white p-6 sm:p-8 shadow-sm
                            dark:border-slate-700 dark:from-slate-800/60 dark:to-slate-800"
        >
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
            {t("about.exploringTitle")}
          </h3>
          <p className="mt-2 text-slate-700 dark:text-slate-300">
            {t("about.exploringSubtitle")}
          </p>

          <ul className="mt-6 space-y-5">
            {/* Item barra 1 */}
            <li>
              <div className="mb-2 flex items-center justify-between text-sm font-medium">
                <span className="text-slate-700 dark:text-slate-300">
                  {t("about.exploringFrontend")}
                </span>
                <span className="text-emerald-700 dark:text-emerald-300">
                  10%
                </span>
              </div>
              <div className="h-2 w-full rounded-full bg-emerald-100 dark:bg-emerald-900/30">
                <div className="h-2 w-[10%] rounded-full bg-emerald-500 dark:bg-emerald-400" />
              </div>
            </li>

            {/* Item barra 2 */}
            <li>
              <div className="mb-2 flex items-center justify-between text-sm font-medium">
                <span className="text-slate-700 dark:text-slate-300">
                  {t("about.exploringBackend")}
                </span>
                <span className="text-emerald-700 dark:text-emerald-300">
                  3%
                </span>
              </div>
              <div className="h-2 w-full rounded-full bg-emerald-100 dark:bg-emerald-900/30">
                <div className="h-2 w-[3%] rounded-full bg-emerald-500 dark:bg-emerald-400" />
              </div>
            </li>

            {/* Item barra 3 */}
            <li>
              <div className="mb-2 flex items-center justify-between text-sm font-medium">
                <span className="text-slate-700 dark:text-slate-300">
                  {t("about.exploringLayout")}
                </span>
                <span className="text-emerald-700 dark:text-emerald-300">
                  10%
                </span>
              </div>
              <div className="h-2 w-full rounded-full bg-emerald-100 dark:bg-emerald-900/30">
                <div className="h-2 w-[10%] rounded-full bg-emerald-500 dark:bg-emerald-400" />
              </div>
            </li>
          </ul>
        </section>
      </div>

      {/* ====== FILOSOFÍA + COLABORACIÓN ====== */}
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Filosofía */}
        <section
          className="rounded-3xl border border-emerald-200/60 bg-white p-6 sm:p-8 shadow-sm
                            dark:border-slate-700 dark:bg-slate-800"
        >
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
            {t("about.philosophyTitle")}
          </h3>
          <p className="mt-2 text-slate-700 dark:text-slate-300">
            {t("about.philosophySubtitle")}
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700 dark:text-slate-300">
            <li>
              <strong className="text-slate-900 dark:text-slate-100">
                {t("about.cleanCode")}
              </strong>{" "}
              — {t("about.cleanCodeDesc")}
            </li>
            <li>
              <strong className="text-slate-900 dark:text-slate-100">
                {t("about.performance")}
              </strong>{" "}
              — {t("about.performanceDesc")}
            </li>
            <li>
              <strong className="text-slate-900 dark:text-slate-100">
                {t("about.userFocus")}
              </strong>{" "}
              — {t("about.userFocusDesc")}
            </li>
          </ul>
        </section>

        {/* Colaboración */}
        <section
          className="rounded-3xl border border-emerald-200/60 bg-white p-6 sm:p-8 shadow-sm
                            dark:border-slate-700 dark:bg-slate-800"
        >
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
            {t("about.collabTitle")}
          </h3>
          <p className="mt-2 text-slate-700 dark:text-slate-300">
            {t("about.collabSubtitle")}
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700 dark:text-slate-300">
            <li>{t("about.teamwork")}</li>
            <li>{t("about.clearComm")}</li>
            <li>{t("about.adaptability")}</li>
          </ul>
        </section>
      </div>
    </section>
  );
}
