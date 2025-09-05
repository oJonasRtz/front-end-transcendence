import type React from "react";
import type { comumValues } from "../types";

export function Input(props: comumValues & {children?: React.ReactNode} & {className?: string, placeholder?: string, type?: string})
{
	return (
			<input className={`${props.className} ${props.input}`}
				placeholder={props.placeholder}
				type={props.type}
			/>
	);
}