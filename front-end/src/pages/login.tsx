import { Box } from "../components/box";
import { Input } from "../components/input";
import type { comumValues } from "../types";
import { Mail, Lock } from "lucide-react";

export function Login(props: comumValues) {
	const inputCuston: string = "flex items-center bg-slate-200 gap-4 p-2 shadow-md";

  return (
    <div className="flex flex-col h-screen p-4">
      <div className={`${props.center} flex-1`}>
		<Box {...props} className="w-3/12 h-3/4 p-4 gap-20 text-black">
          <h1 className={`${props.titleFormat} ${props.center} text-black relative top-10`}>Login</h1>
		  <div className="relative flex flex-col gap-4 p-4">
			<div className={inputCuston}>
				<Mail className="text-gray-500 w-15 h-15"/>
				<Input {...props} className="h-20 flex-1" placeholder="Email address"/>
			</div>
		  	<div className={inputCuston}>
				<Lock className="text-gray-500 w-15 h-15"/>
				<Input {...props} className="h-20 flex-1" placeholder="Password"/>
			</div>
			<div className="flex gap-4 underline">
				<div className="h-5 w-5 bg-slate-200"/>
				Remember me
			</div>
			<div className="relative top-10 flex flex-col p-4 gap-2">
				<button className={`${props.buttonColour} h-20 w-50 text-white font-bold text-xl rounded-md`}>Sign in</button>
				<button className="underline">Sign up</button>
			</div>
		  </div>
        </Box>
      </div>
    </div>
  );
}
