import "./index.css";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import type { comumValues } from "./types";
import { Header } from "./pages/header";

function App() {
  const std: comumValues = {
    bgColour: "bg-slate-950",
    buttonColour: "bg-blue-500",
    fontColour: "text-white",
    titleFormat: "font-bold text-3xl",
    center: "flex justify-center items-center",
    logo: "src/assets/react.svg",
	box: "flex flex-col bg-white border border-slate-700 shadow-md rounded-md",
	input: "bg-slate-200 border rounded-md"
  };

  return (
    <div className={`${std.bgColour} ${std.fontColour} flex flex-col h-screen `}>
      <Header {...std}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login {...std} />} />
            <Route path="/home" element={<Home {...std} />} />
          </Routes>
        </BrowserRouter>
      </Header>
    </div>
  );
}

export default App;
