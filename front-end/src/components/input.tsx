import type React from "react";
import type { comumValues } from "../types";

export function Input(props: comumValues & {className?: string, placeholder?: string, type?: string, onChange?: React.ChangeEventHandler<HTMLInputElement>})
{
	return (
			<input className={`${props.className} ${props.input} p-2`}
				placeholder={props.placeholder}
				type={props.type}
				onChange={props.onChange}
			/>
	);
}
