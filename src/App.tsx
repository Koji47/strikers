import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Fighters from "./pages/Fighters/Fighters";
import Nav from "./components/Nav/Nav";
import Strikes from "./pages/Strikes/Strikes";
import Tutorials from "./pages/Tutorials/Tutorial";

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fighters" element={<Fighters />} />
        <Route path="/strikes" element={<Strikes />} />
        <Route path="/tutorials" element={<Tutorials />} />
      </Routes>
    </>
  );
};

export default App;
