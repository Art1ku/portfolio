"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { en, Dictionary } from "@/locales/en";
import { ru } from "@/locales/ru";

type Lang = "en" | "ru";

interface LanguageContextType {
  lang: Lang;
  t: Dictionary;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang | null;
    if (saved === "ru" || saved === "en") setLang(saved);
  }, []);

  const toggleLang = () => {
    const next = lang === "en" ? "ru" : "en";
    setLang(next);
    localStorage.setItem("lang", next);
  };

  const t = lang === "en" ? en : ru;

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
};