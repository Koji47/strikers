import FighterCard from "../../components/FighterCard/FighterCard";
import "./Fighters.scss";

const Fighters = () => {
  const strikes = [
    { name: "Teep", power: "★★☆☆☆", speed: "★★★★☆" },
    { name: "Left kick", power: "★★★☆☆", speed: "★★★★☆" },
    { name: "Jab", power: "★★☆☆☆", speed: "★★★★★" },
    { name: "Question mark kick", power: "★★★☆☆", speed: "★★☆☆☆" },
  ];

  return (
    <>
      {" "}
      <FighterCard
        gym={"Team Tieu"}
        first_name={"Chu"}
        last_name={"Lam"}
        discipline={"Muay Thai"}
        location={"London"}
        strikes={strikes}
        picture_url={`/src/assets/ChuLam_PFP.jpg`}
      />{" "}
      <FighterCard
        gym={"Team Tieu"}
        first_name={"Chu"}
        last_name={"Lam"}
        discipline={"Muay Thai"}
        location={"London"}
        strikes={strikes}
        picture_url={`/src/assets/ChuLam_PFP.jpg`}
      />{" "}
      <FighterCard
        gym={"Team Tieu"}
        first_name={"Chu"}
        last_name={"Lam"}
        discipline={"Muay Thai"}
        location={"London"}
        strikes={strikes}
        picture_url={`/src/assets/ChuLam_PFP.jpg`}
      />{" "}
      <FighterCard
        gym={"Team Tieu"}
        first_name={"Chu"}
        last_name={"Lam"}
        discipline={"Muay Thai"}
        location={"London"}
        strikes={strikes}
        picture_url={`/src/assets/ChuLam_PFP.jpg`}
      />
    </>
  );
};

export default Fighters;
