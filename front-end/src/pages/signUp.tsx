import { Box } from "../components/box";
import type { comumValues } from "../types";

export function SignUp(props: comumValues) {
  return (
    <div className="flex flex-col h-screen p-4">
      <div className={`${props.fontColour} ${props.center} flex-1`}>
        <Box {...props}>
          <h1
            className={`${props.titleFormat} flex justify-center items-center relative top-10`}
          >
            Sign up
          </h1>
        </Box>
      </div>
    </div>
  );
}
