import { useLang } from "../lang/useLang";

export default function Contact() {
  const { t } = useLang();

  return (
    <section
      id="contacto"
      className="scroll-mt-28 mx-auto max-w-6xl px-4 py-16 md:py-20"
    >
      {/* Encabezado */}
      <header className="mb-10 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-800 md:text-4xl dark:text-slate-100">
          {t("contact.title")}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-slate-600 dark:text-slate-400">
          {t("contact.subtitle")}
        </p>
      </header>

      {/* Columna izquierda: tarjetas de datos */}
      <div className="grid grid-cols-1">
        <section
          aria-labelledby="datos-contacto-title"
          className="rounded-3xl border border-emerald-200/60 bg-white p-6 dark:border-slate-700 dark:bg-slate-800"
        >
          <h3
            id="datos-contacto-title"
            className="text-xl font-bold text-slate-800 dark:text-slate-100"
          >
            {t("contact.cardTitle")}
          </h3>

          {/* Email */}
          <article className="mt-4 rounded-2xl border border-emerald-100 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-800">
            <header className="mb-1 flex items-center gap-2">
              <span
                aria-hidden="true"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 dark:bg-emerald-900/40"
              >
                ✉️
              </span>
              <h4 className="text-base font-semibold text-slate-800 dark:text-slate-100">
                {t("contact.emailLabel")}
              </h4>
            </header>
            <p>
              <a
                href="mailto:mamanisergioomar@gmail.com"
                className="font-semibold text-emerald-700 underline underline-offset-4 hover:text-emerald-800 dark:text-emerald-400 dark:hover:text-emerald-300"
              >
                mamanisergioomar@gmail.com
              </a>
            </p>
          </article>

          {/* Teléfono */}
          <article className="mt-4 rounded-2xl border border-emerald-100 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-800">
            <header className="mb-1 flex items-center gap-2">
              <span
                aria-hidden="true"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 dark:bg-emerald-900/40"
              >
                📞
              </span>
              <h4 className="text-base font-semibold text-slate-800 dark:text-slate-100">
                {t("contact.phoneLabel")}
              </h4>
            </header>
            <p className="text-slate-700 dark:text-slate-300">
              +54 9 1138327447
            </p>
          </article>

          {/* Ubicación + mapa */}
          <article className="mt-4 rounded-2xl border border-emerald-100 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-800">
            <header className="mb-1 flex items-center gap-2">
              <span
                aria-hidden="true"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 dark:bg-emerald-900/40"
              >
                📍
              </span>
              <h4 className="text-base font-semibold text-slate-800 dark:text-slate-100">
                {t("contact.locationLabel")}
              </h4>
            </header>
            <p className="text-slate-700 dark:text-slate-300">
              Argentina-Bs As (CABA)
            </p>

            {/* Mapa (placeholder) */}
            <figure className="mt-3">
              <div
                className="flex h-48 w-full items-center justify-center rounded-xl border border-emerald-100 bg-emerald-50 text-sm font-medium text-emerald-700 
                dark:border-slate-700 dark:bg-slate-900 dark:text-emerald-400"
              >
                {/* Reemplazá TODO este div por el iframe de abajo */}
                {/* IFRAME DEL MAPA */}
                <div className="h-48 w-full overflow-hidden rounded-xl">
                  <iframe
                    title={t("contact.mapLabel")}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105073.1173441429!2d-58.433305450000034!3d-34.61592025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3d05457fbb%3A0xe160f4fce7f7c017!2sCdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1755563898633!5m2!1ses-419!2sar" /* <-- tu https://www.google.com/maps/embed?pb=... */
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

              <figcaption className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                {t("contact.mapCaption")}
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
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:shadow
                         dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
            >
              {t("contact.socials.linkedin")}
            </a>
          </li>
          <li>
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:shadow
                         dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
            >
              {t("contact.socials.github")}
            </a>
          </li>
          <li>
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:shadow
                         dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
            >
              {t("contact.socials.instagram")}
            </a>
          </li>
        </ul>
      </footer>
    </section>
  );
}
