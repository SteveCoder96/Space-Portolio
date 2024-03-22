'use client'
import { useRouter, AppRouterInstance } from "next/navigation";
import en from "@/locales/en";
import es from "@/locales/es";

export const useLanguage = () => {
    const { locale } = useRouter() as AppRouterInstance;
    const t = locale === "es" ? es : en;
    return { t, locale }
}