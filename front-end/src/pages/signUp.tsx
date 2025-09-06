import { useNavigate } from "react-router-dom";
import { Box } from "../components/box";
import { Button } from "../components/button";
import type { comumValues } from "../types";
import { Input } from "../components/input";
import { useState } from "react";
import { useTheme } from "../context/theme";

export function SignUp() {
  const navigate = useNavigate();
  const inputClassName: string = "h-20";
  const [seePass, setSeePass] = useState<boolean>(false);
  const [pass, setPass] = useState<string>("password");
  //infos
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const theme: comumValues = useTheme();

  return (
    <div className="flex flex-col h-screen p-4">
      <div className={`${theme.fontColour} ${theme.center} flex-1`}>
        <Box>
          <h1
            className={`${theme.titleFormat} ${theme.fontColour2} flex justify-center items-center relative top-10`}
          >
            Sign up
          </h1>
          <div className="relative flex flex-col p-4 gap-4 ">
            <div className={`${theme.inputCuston} h-20`}>
              <theme.userIcon className={`${theme.iconsCuston}`} />
              <Input
                
                className={`${inputClassName} flex-1`}
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className={`${theme.inputCuston} h-20`}>
              <theme.mailIcon className={`${theme.iconsCuston}`} />
              <Input
                
                className={`${inputClassName} flex-1`}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={`${theme.inputCuston} h-20`}>
              <theme.passIcon className={`${theme.iconsCuston}`} />
              <Input
                
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
                  <theme.canSeePassIcon className={`${theme.iconsCuston}`} />
                ) : (
                  <theme.cantSeePassIcon className={`${theme.iconsCuston}`} />
                )}
              </button>
            </div>
            <div className="flex flex-col relative top-8 p-4 gap-2">
              <Button  onClick={() => navigate("/home")}>
                Sign up
              </Button>
              <button
                className={`${theme.fontColour2} underline`}
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
