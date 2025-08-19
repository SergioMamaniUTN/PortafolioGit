import { useEffect, useMemo, useState } from "react";
import { ThemeContext } from "./context";

export function ThemeProvider({ children }) {
  const getInitial = () => {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
    return "light"; // SIEMPRE claro por defecto
  };

  const [theme, setTheme] = useState(getInitial);

  // 🔹 Paso 1: al montar, forzá quitar 'dark' del <html>
  useEffect(() => {
    document.documentElement.classList.remove("dark");
  }, []);

  // 🔹 Paso 2: cada vez que cambia 'theme', aplicá la clase y guardá preferencia
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
    // debug opcional:
    // console.log("Theme aplicado =>", theme, document.documentElement.className);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));
  const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
