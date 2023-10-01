import Button from "./components/Button/Button";
import FighterCard from "./components/FighterCard/FighterCard";
import Nav from "./components/Nav/Nav";

function App() {
  let test = 1;
  const testFunction = () => {
    test = test + 1;
  };

  return (
    <>
      <Nav />
      {/* <div className="Buttons">
        <Button onClick={testFunction} label="More info" />
      </div> */}

      <FighterCard
        gym={"Team Tieu"}
        first_name={"Chu"}
        last_name={"Lam"}
        discipline={"Muay Thai"}
        location={"London"}
        strike_1={"Teep"}
        strike_1_power={"★★☆☆☆"}
        strike_1_speed={"★★★★☆"}
        strike_2={"Question mark kick"}
        strike_2_power={"★★★☆☆"}
        strike_2_speed={"★★☆☆☆"}
        strike_3={"Left kick"}
        strike_3_power={"★★★☆☆"}
        strike_3_speed={"★★★★☆"}
        strike_4={"jab"}
        strike_4_power={"★★☆☆☆"}
        strike_4_speed={"★★★★★"}
        picture_url={`/src/assets/ChuLam_PFP.jpg`}
      />
    </>
  );
}

export default App;
