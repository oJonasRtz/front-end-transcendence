import { useNavigate } from "react-router-dom";
import { Box } from "../components/box";
import { Input } from "../components/input";
import type { comumValues } from "../types";
import { Mail, Lock, Check, Eye, EyeClosed } from "lucide-react";
import { useState } from "react";

export function Login(props: comumValues) {
  const inputCuston: string =
    "flex items-center bg-slate-200 gap-4 p-2 shadow-md";
  const navigate = useNavigate();
  const [check, setCheck] = useState<string>("bg-slate-200");
  const [seePass, setSeePass] = useState<boolean>(false);
  const [pass, setPass] = useState<string>("password");

  return (
    <div className="flex flex-col h-screen p-4">
      <div className={`${props.center} flex-1`}>
        <Box {...props}>
          <h1
            className={`${props.titleFormat} ${props.center} text-black relative top-10`}
          >
            Login
          </h1>
          <div className="relative flex flex-col gap-4 p-4">
            <div className={inputCuston}>
              <Mail className="text-gray-500 w-15 h-15" />
              <Input
                {...props}
                className="h-20 flex-1"
                placeholder="Email address"
              />
            </div>
            <div className={inputCuston}>
              <Lock className="text-gray-500 w-15 h-15" />
              <Input
                {...props}
                className="h-20 flex-1"
                placeholder="Password"
				type={pass}
              />
			  <button onClick={() => {
				setSeePass(seePass ? false : true);
				setPass(pass === "password" ? "text" : "password");
			}}>
				{seePass === true ? <Eye/> : <EyeClosed/>}
			  </button>
            </div>
            <button className="flex gap-4 underline" onClick={() => {setCheck(check === "bg-slate-200" ? props.buttonColour : "bg-slate-200")}}>
              <div className={`h-5 w-5 ${check} flex items-center justify-center`}>
				{check !== "bg-slate-200" && <Check className="w-4 h-4 text-white"/>}
			</div>
              Remember me
            </button>
            <div className="relative top-10 flex flex-col p-4 gap-2">
              <button
                className={`${props.buttonColour} h-20 w-50 text-white font-bold text-xl rounded-md`}
				onClick={() => navigate("/home")}
              >
                Sign in
              </button>
              <button className="underline" onClick={() => navigate("/sign-up")}>Sign up</button>
            </div>
          </div>
        </Box>
      </div>
    </div>
  );
}
