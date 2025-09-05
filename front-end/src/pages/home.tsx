import type { comumValues } from "../types";

export function Home(props: comumValues) {
  return (
    <>
      <h1 className={`${props.fontColour} flex justify-center items-center h-screen`}>This is home page</h1>
    </>
  );
}
