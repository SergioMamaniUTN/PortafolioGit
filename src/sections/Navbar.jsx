import { useTheme } from "../theme/useTheme";
import { useLang } from "../lang/useLang";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { lang, toggle, t } = useLang();

  return (
    <header className="sticky top-0 z-40 border-b border-emerald-100/60 bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/50 dark:bg-slate-900/60 dark:supports-[backdrop-filter]:bg-slate-900/50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Menú de anclas */}
        <nav className="mx-auto flex items-center justify-center gap-2 rounded-full bg-white/80 text-slate-700 dark:bg-slate-800/90 dark:text-white px-6 py-3 shadow-xl backdrop-blur-md">
          <a
            href="#inicio"
            aria-current="page"
            className="flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition
                       hover:-translate-y-0.5 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-teal-500 hover:text-white
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300
                       aria-[current=page]:bg-gradient-to-r aria-[current=page]:from-emerald-500 aria-[current=page]:to-teal-500"
          >
            {t("navbar.home")}
          </a>
          <a
            href="#acerca"
            className="flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition
                       hover:-translate-y-0.5 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-teal-500 hover:text-white
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
          >
            {t("navbar.about")}
          </a>
          <a
            href="#trabajos"
            className="flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition
                       hover:-translate-y-0.5 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-teal-500 hover:text-white
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
          >
            {t("navbar.projects")}
          </a>
          <a
            href="#experiencia"
            className="flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition
                       hover:-translate-y-0.5 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-teal-500 hover:text-white
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
          >
            {t("navbar.experience")}
          </a>
          <a
            href="#contacto"
            className="flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition
                       hover:-translate-y-0.5 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-teal-500 hover:text-white
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
          >
            {t("navbar.contact")}
          </a>
        </nav>

        {/* Controles */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            id="theme-toggle"
            aria-label="Cambiar tema"
            className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition
                       hover:-translate-y-0.5 hover:shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300
                       dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>

          <button
            type="button"
            id="lang-toggle"
            onClick={toggle}
            aria-label="Cambiar idioma"
            className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition
                       hover:-translate-y-0.5 hover:shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300
                       dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100"
          >
            {lang === "es" ? "ES" : "EN"}
          </button>
        </div>
      </div>
    </header>
  );
}
