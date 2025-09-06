import type React from "react";
import { useTheme } from "../context/theme";
import type { comumValues } from "../types";

export function Box({ children, className }: { children?: React.ReactNode } & { className?: string }) {
	const theme: comumValues = useTheme();

	return (
		<div className={`${theme.box} ${className} w-3/12 h-3/4 p-4 gap-20 ${theme.fontColour2}`}>
			{children}
		</div>
	);
}