// About.jsx
// ===== Datos fuera del componente =====
const frontend = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind",
  "Bootstrap",
];
const backend = ["En Proceso"];
const tools = ["En proceso"];

export default function About() {
  return (
    <section
      id="acerca"
      className="scroll-mt-28 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 md:py-20"
    >
      {/* ====== ENCABEZADO ====== */}
      <header className="text-center">
        <p className="mx-auto inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-5 py-2 text-baaw font-semibold text-emerald-700 text-semibold">
          Acerca de mí
        </p>
        <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-slate-900 text-balance">
          Quién soy y en qué me enfoco
        </h2>
        <p className="mx-auto mt-3 max-w-3xl text-slate-600 leading-relaxed">
          Desarrollador Frontend con React, JavaScript, HTML y CSS. Manejo
          Tailwind y Bootstrap. Estudiante de Ingeniería en Sistemas (UTN FRBA).
        </p>
      </header>

      {/* ====== MÉTRICAS (3 tarjetas) ====== */}
      <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {/* Proyectos personales */}
        <li>
          <article className="h-24 sm:h-28 flex items-center gap-4 rounded-3xl border border-emerald-100/60 bg-white p-4 shadow-sm">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-lg">
              📁
            </div>
            <div>
              <p className="text-lg font-bold text-slate-900">En proceso</p>
              <p className="text-sm font-medium text-slate-600">
                Proyectos personales
              </p>
            </div>
          </article>
        </li>

        {/* Tecnologías */}
        <li>
          <article className="h-24 sm:h-28 flex items-center gap-4 rounded-3xl border border-emerald-100/60 bg-white p-4 shadow-sm">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-lg">
              🧠
            </div>
            <div>
              <p className="text-lg font-bold text-slate-900">6</p>
              <p className="text-sm font-medium text-slate-600">
                Tecnologías que manejo
              </p>
            </div>
          </article>
        </li>

        {/* Cursos / Formación */}
        <li>
          <article className="h-24 sm:h-28 flex items-center gap-4 rounded-3xl border border-emerald-100/60 bg-white p-4 shadow-sm">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-lg">
              🎓
            </div>
            <div>
              <p className="text-lg font-bold text-slate-900">2</p>
              <p className="text-sm font-medium text-slate-600">
                Cursos y formación
              </p>
            </div>
          </article>
        </li>
      </ul>

      {/* ====== ESPECIALIZACIÓN + STACK ====== */}
      <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-[1.2fr_1fr]">
        {/* Especialización */}
        <section className="rounded-3xl border border-emerald-200/60 bg-gradient-to-b from-emerald-50/60 to-white p-6 sm:p-8 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900">Especialización</h3>
          <p className="mt-2 text-slate-700 leading-relaxed">
            Frontend con React y JavaScript. Maquetado accesible y responsive
            con HTML, CSS, Tailwind y Bootstrap. Estudiante de Ingeniería en
            Sistemas (UTN FRBA).
          </p>

          <div className="mt-5 space-y-4">
            {/* Item 1 */}
            <article className="rounded-2xl border border-emerald-100/70 bg-white p-4 shadow-sm">
              <header className="mb-1 flex items-center gap-2">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50">
                  🧩
                </span>
                <h4 className="text-base font-semibold text-slate-900">
                  React &amp; Frontend
                </h4>
              </header>
              <p className="text-sm text-slate-700">
                Interfaces modernas y componentes reutilizables con buenas
                prácticas.
              </p>
            </article>

            {/* Item 2 */}
            <article className="rounded-2xl border border-emerald-100/70 bg-white p-4 shadow-sm">
              <header className="mb-1 flex items-center gap-2">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50">
                  🎨
                </span>
                <h4 className="text-base font-semibold text-slate-900">
                  Maquetado &amp; UI
                </h4>
              </header>
              <p className="text-sm text-slate-700">
                Diseño responsive y consistencia visual con Tailwind y
                Bootstrap.
              </p>
            </article>
          </div>
        </section>

        {/* Stack técnico */}
        <section className="rounded-3xl border border-emerald-200/60 bg-white p-6 sm:p-8 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900">Stack técnico</h3>
          <p className="mt-2 text-slate-700">Tecnologías que domino</p>

          {/* Frontend */}
          <h4 className="mt-5 text-sm font-semibold uppercase tracking-wide text-slate-500">
            Frontend
          </h4>
          <ul className="mt-3 flex flex-wrap gap-2">
            {frontend.map((t) => (
              <li
                key={t}
                className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700"
              >
                {t}
              </li>
            ))}
          </ul>

          {/* Backend (en proceso) */}
          <h4 className="mt-6 text-sm font-semibold uppercase tracking-wide text-slate-500">
            Backend
          </h4>
          <ul className="mt-3 flex flex-wrap gap-2">
            {backend.map((t) => (
              <li
                key={t}
                className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium text-slate-600"
              >
                {t}
              </li>
            ))}
          </ul>

          {/* Herramientas (en proceso) */}
          <h4 className="mt-6 text-sm font-semibold uppercase tracking-wide text-slate-500">
            Herramientas
          </h4>
          <ul className="mt-3 flex flex-wrap gap-2">
            {tools.map((t) => (
              <li
                key={t}
                className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium text-slate-600"
              >
                {t}
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* ====== LOGROS + EXPLORANDO ====== */}
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Logros */}
        <section className="rounded-3xl border border-emerald-200/60 bg-white p-6 sm:p-8 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900">Logros</h3>
          <p className="mt-2 text-slate-700">
            Formación y proyectos personales
          </p>

          <ul className="mt-4 space-y-4">
            {/* UTN */}
            <li>
              <article className="rounded-2xl border border-emerald-100/70 bg-white p-4 shadow-sm">
                <header className="mb-1 flex items-center gap-2">
                  <span>🎓</span>
                  <h4 className="text-base font-semibold text-slate-900">
                    Estudiante de Ingeniería en Sistemas (UTN FRBA)
                  </h4>
                </header>
                <p className="text-sm text-slate-700">
                  Bases sólidas de informática y programación.
                </p>
              </article>
            </li>

            {/* Udemy */}
            <li>
              <article className="rounded-2xl border border-emerald-100/70 bg-white p-4 shadow-sm">
                <header className="mb-1 flex items-center gap-2">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50">
                    🧩
                  </span>
                  <h4 className="text-base font-semibold text-slate-900">
                    Curso Frontend en Udemy (2024)
                  </h4>
                </header>
                <p className="text-sm text-slate-700">
                  Fundamentos de desarrollo frontend y proyectos introductorios.
                </p>
              </article>
            </li>

            {/* Portafolio en construcción */}
            <li>
              <article className="rounded-2xl border border-emerald-100/70 bg-white p-4 shadow-sm">
                <header className="mb-1 flex items-center gap-2">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50">
                    🚀
                  </span>
                  <h4 className="text-base font-semibold text-slate-900">
                    Portafolio en construcción
                  </h4>
                </header>
                <p className="text-sm text-slate-700">
                  Portafolio profesional con React y Tailwind para mostrar
                  futuros proyectos.
                </p>
              </article>
            </li>
          </ul>
        </section>

        {/* Explorando */}
        <section className="rounded-3xl border border-emerald-200/60 bg-gradient-to-b from-emerald-50/60 to-white p-6 sm:p-8 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900">Explorando</h3>
          <p className="mt-2 text-slate-700">Crecimiento técnico continuo</p>

          <ul className="mt-6 space-y-5">
            {/* Item barra 1 */}
            <li>
              <div className="mb-2 flex items-center justify-between text-sm font-medium">
                <span className="text-slate-700">Frotend (aprendiendo)</span>
                <span className="text-emerald-700">10%</span>
              </div>
              <div className="h-2 w-full rounded-full bg-emerald-100">
                <div className="h-2 w-[10%] rounded-full bg-emerald-500" />
              </div>
            </li>

            {/* Item barra 2 */}
            <li>
              <div className="mb-2 flex items-center justify-between text-sm font-medium">
                <span className="text-slate-700">Backend (aprendiendo)</span>
                <span className="text-emerald-700">3%</span>
              </div>
              <div className="h-2 w-full rounded-full bg-emerald-100">
                <div className="h-2 w-[3%] rounded-full bg-emerald-500" />
              </div>
            </li>

            {/* Item barra 3 */}
            <li>
              <div className="mb-2 flex items-center justify-between text-sm font-medium">
                <span className="text-slate-700">
                  Maquetado (Tailwind / Bootstrap)
                </span>
                <span className="text-emerald-700">10%</span>
              </div>
              <div className="h-2 w-full rounded-full bg-emerald-100">
                <div className="h-2 w-[10%] rounded-full bg-emerald-500" />
              </div>
            </li>
          </ul>
        </section>
      </div>

      {/* ====== FILOSOFÍA + COLABORACIÓN ====== */}
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Filosofía */}
        <section className="rounded-3xl border border-emerald-200/60 bg-white p-6 sm:p-8 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900">Filosofía</h3>
          <p className="mt-2 text-slate-700">Principios que guían mi código</p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
            <li>
              <strong>Código limpio</strong> — legible y mantenible.
            </li>
            <li>
              <strong>Performance</strong> — optimización desde el diseño.
            </li>
            <li>
              <strong>Enfoque en el usuario</strong> — UX clara y accesible.
            </li>
          </ul>
        </section>

        {/* Colaboración */}
        <section className="rounded-3xl border border-emerald-200/60 bg-white p-6 sm:p-8 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900">Colaboración</h3>
          <p className="mt-2 text-slate-700">Metodologías y soft skills</p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
            <li>Trabajo en equipo</li>
            <li>Comunicación clara</li>
            <li>Adaptabilidad &amp; perseverancia</li>
          </ul>
        </section>
      </div>
    </section>
  );
}
