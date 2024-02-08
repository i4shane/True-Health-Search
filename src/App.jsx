import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import AiChat from "./pages/AiChat.jsx";

function App() {
  return (
    <Routes>
      <Route  path="/" element={<LandingPage />}></Route>
      <Route  path="/chat" element={<AiChat/>}></Route>
   
    </Routes>      
  );
}

export default App;
