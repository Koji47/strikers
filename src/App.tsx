import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Fighters from "./pages/Fighters/Fighters";
import Nav from "./components/Nav/Nav";
import Strikes from "./pages/Strikes/Strikes";
import Tutorials from "./pages/Tutorials/Tutorial";
import { useState, useEffect, ChangeEvent } from "react";
import Strike from "./types/StrikeResponse";
import FightersRequest from "./types/FighterRequest";
import FightersResponse from "./types/FighterResponse";

const App = () => {
  const [strikesDB, setStrikesDB] = useState<Strike[]>([]);
  const [fightersDB, setFightersDB] = useState<FightersResponse[]>([]);
  const [strikeRnd, setStrikeRnd] = useState<Strike>();
  const [fighterRnd, setFighterRnd] = useState<FightersResponse>();

  const getStrikes = async () => {
    const response = await fetch("http://localhost:8080/strikes");
    const strikesData = await response.json();
    setStrikesDB(strikesData);
  };

  const getFighters = async () => {
    const response = await fetch("http://localhost:8080/fighters");
    const fightersData = await response.json();
    setFightersDB(fightersData);
  };

  const getStrikeRnd = async () => {
    const response = await fetch("http://localhost:8080/strikes/random");
    const strikeRandom = await response.json();
    setStrikeRnd(strikeRandom);
  };

  const getFighterRnd = async () => {
    const response = await fetch("http://localhost:8080/fighters/random");
    const FighterRandom = await response.json();
    setFighterRnd(FighterRandom);
  };

  useEffect(() => {
    getStrikes();
    getFighters();
    getStrikeRnd();
    getFighterRnd();
  }, []);

  return (
    <>
      <Nav />
      <Routes>
        {strikeRnd && (
          <Route
            path="/"
            element={
              <Home strikes={strikeRnd} fighters={fightersDB} index={3} />
            }
          />
        )}
        {fightersDB && (
          <Route
            path="/fighters"
            element={<Fighters fighters={fightersDB} />}
          />
        )}
        {strikesDB && (
          <Route path="/strikes" element={<Strikes strikes={strikesDB} />} />
        )}
      </Routes>
    </>
  );
};

export default App;
