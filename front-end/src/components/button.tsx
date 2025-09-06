import type React from "react";
import type { comumValues } from "../types";

export function Button(props:comumValues & {children?: React.ReactNode, className?: string, onClick?: React.MouseEventHandler<HTMLButtonElement>})
{
	return (
		<button className={`${props.buttonColour} ${props.className} h-20 w-50 text-white font-bold text-xl rounded-md`}
			onClick={props.onClick}
		>
			{props.children}
		</button>
	);
}
