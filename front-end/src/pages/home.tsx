import type { comumValues } from "../types";

export function Home(props: comumValues) {
  return (
    <>
      <h1 className={`${props.fontColour}`}>This is home page</h1>
    </>
  );
}
