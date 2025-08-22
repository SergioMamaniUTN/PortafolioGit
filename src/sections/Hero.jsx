import {
  LuLinkedin,
  LuGithub,
  LuInstagram,
  LuCalendar,
  LuMail,
} from "react-icons/lu";
import { useLang } from "../lang/useLang";

export default function Hero() {
  const { t } = useLang();

  return (
    <section
      id="inicio"
      className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-12 md:grid-cols-2 md:gap-12 md:py-16 lg:py-20 scroll-mt-28"
    >
      {/* Columna izquierda: Texto + CTAs */}
      <div className="flex flex-col justify-center">
        <p className="text-3xl font-medium tracking-tight text-slate-500 dark:text-slate-400">
          {t("hero.hiIm")}
        </p>

        {/* Nombre con degradado */}
        <h1
          className="mt-2 text-5xl md:text-6xl font-extrabold tracking-tight
               text-transparent bg-clip-text bg-gradient-to-r
               from-slate-600 via-emerald-700 to-emerald-500
               dark:from-slate-200 dark:via-emerald-300 dark:to-emerald-400
               leading-[1.1] pb-1"
        >
          Sergio
        </h1>

        <h2 className="mt-3 text-2xl font-semibold text-slate-700 dark:text-slate-200">
          {t("hero.role")}
        </h2>

        <p className="mt-6 max-w-xl text-lg leading-7 text-slate-600 dark:text-slate-300">
          {t("hero.bio")}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="/public/CV SERGIO MAMANI (1).pdf"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
          >
            {t("hero.downloadCV")}
          </a>
          <a
            href="#trabajos"
            className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-5 py-3 text-sm font-semibold text-emerald-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-emerald-50 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-500/30 dark:bg-transparent dark:border-emerald-500/40 dark:text-emerald-300 dark:hover:bg-emerald-900/20"
          >
            {t("hero.viewProjects")}
          </a>
        </div>
      </div>

      {/* Columna derecha: tarjeta con foto + redes */}
      <aside className="relative">
        <div className="relative rounded-3xl border border-emerald-200/60 bg-gradient-to-br from-white to-emerald-50 p-5 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.25)]  dark:from-slate-800 dark:to-slate-800/60 dark:border-slate-700">
          {/* Adornos punteados detrás de la foto */}
          <div className="pointer-events-none absolute -left-6 top-6 h-[86%] w-[86%] -rotate-6 rounded-[32px] border-2 border-dashed border-emerald-300/50 -z-10 dark:border-emerald-400/30"></div>
          <div className="pointer-events-none absolute right-4 -top-2 h-[80%] w-[82%] rotate-6 rounded-[28px] border-2 border-dashed border-emerald-300/30 -z-10 dark:border-emerald-400/20"></div>

          {/* Foto (izq) + redes (der) */}
          <div className="relative z-10 grid grid-cols-[1fr_auto] gap-5">
            {/* Foto */}
            <div className="rounded-2xl border border-emerald-200/60 bg-white p-2 shadow-inner dark:border-slate-700 dark:bg-slate-900">
              <div className="aspect-square overflow-hidden rounded-xl">
                <img
                  src="/SergioPerfil.png"
                  alt="Foto de perfil"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Píldoras sociales */}
            <ul className="flex flex-col items-center gap-4 pr-1">
              <li>
                <a
                  href="https://www.linkedin.com/in/sergio-omar-mamani-23239337b/"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/80 shadow-sm ring-1 ring-black/5 backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-400/50 dark:bg-slate-800/80 dark:ring-white/10"
                  aria-label="LinkedIn"
                >
                  <LuLinkedin className="h-5 w-5" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/80 shadow-sm ring-1 ring-black/5 backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-400/50 dark:bg-slate-800/80 dark:ring-white/10"
                  aria-label="GitHub"
                >
                  <LuGithub className="h-5 w-5" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/80 shadow-sm ring-1 ring-black/5 backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-400/50 dark:bg-slate-800/80 dark:ring-white/10"
                  aria-label="Instagram"
                >
                  <LuInstagram className="h-5 w-5" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/80 shadow-sm ring-1 ring-black/5 backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-400/50   dark:bg-slate-800/80 dark:ring-white/10"
                  aria-label="Calendario"
                >
                  <LuCalendar className="h-5 w-5" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/80 shadow-sm ring-1 ring-black/5 backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-400/50 dark:bg-slate-800/80 dark:ring-white/10"
                  aria-label="Email"
                >
                  <LuMail className="h-5 w-5" />
                </a>
              </li>
            </ul>
          </div>

          {/* Disponible (centrado y ancho del contenido) */}
          <div className="mt-5 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-medium text-emerald-700 shadow-sm  dark:bg-slate-800 dark:border-emerald-500/30 dark:text-emerald-300">
              <span className="relative inline-flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
              </span>
              {t("hero.available")}
            </div>
          </div>

          {/* Info */}
          <div className="mt-6 text-center">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
              Sergio Omar
            </h3>
            <p className="mt-1 text-sm font-semibold text-emerald-700 dark:text-emerald-300">
              {t("hero.roleJunior")}
            </p>
          </div>
        </div>
      </aside>
    </section>
  );
}
