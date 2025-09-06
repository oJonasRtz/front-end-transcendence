import { std } from "./types"; // arquivo onde você definiu std
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Login } from "./pages/login";
import { SignUp } from "./pages/signUp";
import { Home } from "./pages/home";
import { themeContext } from "./context/theme";
import { Header } from "./components/header";

function App() {
  return (
    <themeContext.Provider value={std}>
      <div className={`${std.bgColour} flex flex-col h-screen`}>
        <Header>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Navigate to="/login" replace />} />
              <Route path="/login" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/home" element={<Home />} />
            </Routes>
          </BrowserRouter>
        </Header>
      </div>
    </themeContext.Provider>
  );
}

export default App;
