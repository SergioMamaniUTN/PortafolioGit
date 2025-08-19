// src/lang/useLang.js
import { useContext } from "react";
import { LangContext } from "./LangProvider.jsx"; // 👈 importante la extensión .jsx

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside LangProvider");
  return ctx;
}

export default useLang;
