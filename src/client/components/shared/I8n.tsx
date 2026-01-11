import type React from "react";

export const allLang = ["id", "en"];
export const defaultLang = "en";

type Trans = Record<"id" | "en", string | React.ReactNode>;
export type Lang = keyof Trans;

export const I8n = (lang: Lang, trans: Trans) => {
	return <>{trans[lang]}</>;
};
