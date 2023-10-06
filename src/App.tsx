import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home/Home";
import Nav from "./components/Nav/Nav";
import Fighters from "./pages/Fighters/Fighters";
import Strikes from "./pages/Strikes/Strikes";
import Strike from "./types/StrikeResponse";
import FightersResponse from "./types/FighterResponse";
import EditStrike from "./pages/EditStrike/EditStrike";
import CreateStrike from "./pages/CreateStrike/CreateStrike";

const App = () => {
  const [strikesDB, setStrikesDB] = useState<Strike[]>([]);
  const [fightersDB, setFightersDB] = useState<FightersResponse[]>([]);
  const [strikeRnd, setStrikeRnd] = useState<Strike>();
  const [fightersRnd, setFightersRnd] = useState<FightersResponse[]>([]);

  const getStrikes = async () => {
    const response = await fetch("http://localhost:8080/strikes");
    const strikesData = await response.json();
    setStrikesDB(strikesData);
  };

  const getFighters = async () => {
    const response = await fetch("http://localhost:8080/fighters");
    const fightersData = await response.json();
    // console.log(JSON.stringify(fightersData[0]));
    // console.log(fightersData[0].strikes1);
    // console.log(`${fightersData[0]}`);

    setFightersDB(fightersData);
  };

  const getStrikeRnd = async () => {
    const response = await fetch("http://localhost:8080/strikes/random");
    const strikeRandom = await response.json();
    setStrikeRnd(strikeRandom);
  };

  const getFightersRnd = async () => {
    const response = await fetch("http://localhost:8080/fighters/random");
    const FightersRandom = await response.json();
    setFightersRnd(FightersRandom);
  };

  useEffect(() => {
    getStrikes();
    getFighters();
    getStrikeRnd();
    getFightersRnd();
  }, []);

  return (
    <>
      <Nav />
      <Routes>
        {strikeRnd && (
          <Route
            path="/"
            element={
              <Home strikes={strikeRnd} fighters={fightersRnd} index={3} />
            }
          />
        )}

        <Route path="/fighters" element={<Fighters fighters={fightersDB} />} />

        {strikesDB && (
          <Route path="/strikes" element={<Strikes strikes={strikesDB} />} />
        )}

        <Route
          path="/strike/:id"
          element={<EditStrike strikes={strikesDB} />}
        />

        <Route
          path="/strike/create"
          element={<CreateStrike strikes={strikesDB} />}
        />
      </Routes>
    </>
  );
};

export default App;
