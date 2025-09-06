import type React from "react";
import { useTheme } from "../context/theme";
import type { comumValues } from "../types";

export function Button({ children, className, onClick }: { children?: React.ReactNode, className?: string, onClick?: React.MouseEventHandler<HTMLButtonElement> }) {
	const theme: comumValues = useTheme();
	return (
		<button className={`${theme.buttonColour} ${className} h-20 w-50 ${theme.fontColour} font-bold text-xl rounded-md`}
			onClick={onClick}
		>
			{children}
		</button>
	);
}
