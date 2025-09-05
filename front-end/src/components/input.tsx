import type { comumValues } from "../types";

export function Input(props: comumValues & {className?: string, placeholder?: string, type?: string})
{
	return (
			<input className={`${props.className} ${props.input}`}
				placeholder={props.placeholder}
				type={props.type}
			/>
	);
}
