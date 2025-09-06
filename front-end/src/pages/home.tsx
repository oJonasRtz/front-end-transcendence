import { useTheme } from "../context/theme";
import type { comumValues } from "../types";

export function Home() {
	const theme: comumValues = useTheme();

  return (
    <>
      <h1
        className={`${theme.fontColour} flex justify-center items-center h-screen`}
      >
        This is home page
      </h1>
    </>
  );
}
