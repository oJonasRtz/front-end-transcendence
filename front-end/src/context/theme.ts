import { createContext, useContext } from "react";
import type { comumValues } from "../types";

export const themeContext = createContext<comumValues | null>(null);

export const useTheme = () => {
	const theme = useContext(themeContext);
	if (!theme) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}
	return (theme);
}
