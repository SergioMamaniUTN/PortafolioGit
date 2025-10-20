import React, { createContext, useEffect, useMemo, useState } from "react";
import es from "./es.js";
import en from "./en.js";

// export nombrado del contexto (importarás { LangContext } )
export const LangContext = createContext(null);

// util: acceso "a.b.c"
function getByPath(obj, path) {
  if (!obj || !path) return undefined;
  return path
    .split(".")
    .reduce(
      (acc, key) => (acc && acc[key] != null ? acc[key] : undefined),
      obj
    );
}

// util: variables {{name}}
function interpolate(str, vars = {}) {
  if (typeof str !== "string") return str;
  return str.replace(/\{\{\s*(\w+)\s*\}\}/g, (_, k) => vars[k] ?? "");
}

export function LangProvider({ children }) {
  // localStorage seguro
  const safeGet = (k) => {
    try {
      return typeof window !== "undefined"
        ? window.localStorage.getItem(k)
        : null;
    } catch {
      return null;
    }
  };
  const safeSet = (k, v) => {
    try {
      if (typeof window !== "undefined") window.localStorage.setItem(k, v);
    } catch {}
  };

  const [lang, setLang] = useState(() => {
    const saved = safeGet("lang");
    return saved === "en" || saved === "es" ? saved : "es";
  });

  useEffect(() => {
    safeSet("lang", lang);
  }, [lang]);

  const dict = lang === "en" ? en : es;

  const t = useMemo(
    () => (key, vars) => {
      const value = getByPath(dict, key);
      if (value === undefined) return key;
      return typeof value === "string" ? interpolate(value, vars) : value;
    },
    [dict]
  );

  const value = useMemo(
    () => ({
      lang,
      setLang,
      isEN: lang === "en",
      isES: lang === "es",
      toggle: () => setLang((p) => (p === "es" ? "en" : "es")),
      t,
    }),
    [lang, t]
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export default LangProvider;
