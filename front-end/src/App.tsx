import "./index.css";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import type { comumValues } from "./types";
import { Header } from "./components/header";
import { SignUp } from "./pages/signUp";

function App() {
  const std: comumValues = {
    bgColour: "bg-slate-950",
    buttonColour: "bg-blue-500",
    fontColour: "text-white",
    titleFormat: "font-bold text-3xl",
    center: "flex justify-center items-center",
    logo: "src/assets/react.svg",
	box: "flex flex-col bg-white border border-slate-700 shadow-md rounded-md",
	input: "bg-slate-200 border rounded-md",
	inputCuston: "flex items-center bg-slate-200 gap-4 p-2 shadow-md",
	iconsCuston: "text-blue-500 w-15 h-15",
  };

  return (
    <div className={`${std.bgColour} ${std.fontColour} flex flex-col h-screen `}>
		<title>Transcendence</title>
      <Header {...std}>
        <BrowserRouter>
          <Routes>
			<Route path="/" element={<Navigate to="/login" replace/>}/>
            <Route path="/login" element={<Login {...std} />} />
            <Route path="/home" element={<Home {...std} />} />
			<Route path="/sign-up" element={<SignUp {...std} />} />
          </Routes>
        </BrowserRouter>
      </Header>
    </div>
  );
}

export default App;
