import type React from "react";
import type { comumValues } from "../types";

export function Box(props: comumValues & {children?: React.ReactNode} & {className?: string})
{
	return (
		<div className={`${props.box} ${props.className}`}>
			{props.children}
		</div>
	);
}