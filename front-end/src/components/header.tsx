import type React from "react";
import type { comumValues } from "../types";

export function Header(props: comumValues & { children?: React.ReactNode }) {
  return (
    <>
      <div className={`${props.titleFormat} text-white flex p-4 gap-4 border-b shadow-md`}>
        <img src={props.logo} />
        TRANSCENDENCE
      </div>
      {props.children}
    </>
  );
}
