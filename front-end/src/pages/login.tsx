import { useNavigate } from "react-router-dom";
import { Box } from "../components/box";
import { Input } from "../components/input";
import type { comumValues } from "../types";
import { useState } from "react";
import { Button } from "../components/button";
import { useTheme } from "../context/theme";

export function Login() {
  const navigate = useNavigate();
  const [check, setCheck] = useState<string>("bg-slate-200");
  const [seePass, setSeePass] = useState<boolean>(false);
  const [pass, setPass] = useState<string>("password");

  //infos
  const [password, setPassword] = useState<string>();
  const [email, setEmail] = useState<string>();

	const theme: comumValues = useTheme();

  return (
    <div className="flex flex-col h-screen p-4">
      <div className={`${theme.center} flex-1`}>
        <Box >
          <h1
            className={`${theme.titleFormat} ${theme.center} ${theme.fontColour2} relative top-10`}
          >
            Login
          </h1>
          <div className="relative flex flex-col gap-4 p-4">
            <div className={theme.inputCuston}>
              <theme.mailIcon className={`${theme.iconsCuston}`} />
              <Input
                
                className="h-20 flex-1"
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={theme.inputCuston}>
              <theme.passIcon className={`${theme.iconsCuston}`} />
              <Input
                
                className="h-20 flex-1"
                placeholder="Password"
                type={pass}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <button
                onClick={() => {
                  setSeePass(seePass ? false : true);
                  setPass(pass === "password" ? "text" : "password");
                }}
              >
                {seePass === true ? (
                  <theme.canSeePassIcon className={`${theme.iconsCuston}`} />
                ) : (
                  <theme.cantSeePassIcon className={`${theme.iconsCuston}`} />
                )}
              </button>
            </div>
            <button
              className="flex gap-4 underline"
              onClick={() => {
                setCheck(
                  check === "bg-slate-200" ? theme.buttonColour : "bg-slate-200"
                );
              }}
            >
              <div
                className={`h-5 w-5 ${check} flex items-center justify-center`}
              >
                {check !== "bg-slate-200" && (
                  <theme.checkIcon className="w-4 h-4 text-white" />
                )}
              </div>
              Remember me
            </button>
            <div className="relative top-10 flex flex-col p-4 gap-2">
              <Button  onClick={() => navigate("/home")}>
                Sign in
              </Button>
              <button
                className="underline"
                onClick={() => navigate("/sign-up")}
              >
                Sign up
              </button>
            </div>
          </div>
        </Box>
      </div>
    </div>
  );
}
