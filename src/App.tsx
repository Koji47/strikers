import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Fighters from "./pages/Fighters/Fighters";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/fighters" element={<Fighters />} />
    </Routes>
  );
};

export default App;
