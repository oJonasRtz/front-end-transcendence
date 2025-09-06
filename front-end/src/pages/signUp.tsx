import { useNavigate } from "react-router-dom";
import { Box } from "../components/box";
import { Button } from "../components/button";
import type { comumValues } from "../types";
import { Input } from "../components/input";
import { Eye, EyeClosed, Lock, Mail, User } from "lucide-react";
import { useState } from "react";

export function SignUp(props: comumValues) {
  const navigate = useNavigate();
  const inputClassName: string = "h-20";
  const [seePass, setSeePass] = useState<boolean>(false);
  const [pass, setPass] = useState<string>("password");
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  return (
    <div className="flex flex-col h-screen p-4">
      <div className={`${props.fontColour} ${props.center} flex-1`}>
        <Box {...props}>
          <h1
            className={`${props.titleFormat} flex justify-center items-center relative top-10`}
          >
            Sign up
          </h1>
          <div className="relative flex flex-col p-4 gap-4 ">
            <div className={`${props.inputCuston} h-20`}>
              <User className={`${props.iconsCuston}`} />
              <Input
                {...props}
                className={`${inputClassName} flex-1`}
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className={`${props.inputCuston} h-20`}>
              <Mail className={`${props.iconsCuston}`} />
              <Input
                {...props}
                className={`${inputClassName} flex-1`}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={`${props.inputCuston} h-20`}>
              <Lock className={`${props.iconsCuston}`} />
              <Input
                {...props}
                className={`${inputClassName} flex-1`}
                placeholder="Password"
                type={pass}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                onClick={() => {
                  setSeePass(seePass === true ? false : true);
                  setPass(pass === "password" ? "text" : "password");
                }}
              >
                {seePass === true ? (
                  <Eye className={`${props.iconsCuston}`} />
                ) : (
                  <EyeClosed className={`${props.iconsCuston}`} />
                )}
              </button>
            </div>
            <div className="flex flex-col relative top-8 p-4 gap-2">
              <Button {...props} onClick={() => navigate("/home")}>
                Sign up
              </Button>
              <button
                className="text-black underline"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Back to login
              </button>
            </div>
          </div>
        </Box>
      </div>
    </div>
  );
}
