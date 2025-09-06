import type React from "react";
import { useTheme } from "../context/theme";
import type { comumValues } from "../types";

export function Header({ children }: { children?: React.ReactNode }) {
	const theme: comumValues = useTheme();

  return (
    <>
      <div
        className={`${theme.titleFormat} ${theme.headerTextColour} flex p-4 gap-4 border-b shadow-md`}
      >
        <img src={theme.logo} alt="Logo"/>
        TRANSCENDENCE
      </div>
      {children}
    </>
  );
}
