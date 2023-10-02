import FighterCard from "../../components/FighterCard/FighterCard";
import FeaturedStrike from "../../components/FeaturedStrike/FeaturedStrike";
import Nav from "../../components/Nav/Nav";

const Home = () => {
  let test = 1;
  const testFunction = () => {
    test = test + 1;
  };

  const strikes = [
    { name: "Teep", power: "★★☆☆☆", speed: "★★★★☆" },
    { name: "Left kick", power: "★★★☆☆", speed: "★★★★☆" },
    { name: "Jab", power: "★★☆☆☆", speed: "★★★★★" },
    { name: "Question mark kick", power: "★★★☆☆", speed: "★★☆☆☆" },
  ];

  return (
    <>
      <Nav />
      <FeaturedStrike
        video_url={
          "https://www.youtube.com/embed/FSVcmMd9bR4?si=sWGFVNPRmxRphSMC"
        }
        name={"Jab"}
      />
      <FighterCard
        gym={"Team Tieu"}
        first_name={"Chu"}
        last_name={"Lam"}
        discipline={"Muay Thai"}
        location={"London"}
        strikes={strikes}
        picture_url={`/src/assets/ChuLam_PFP.jpg`}
      />
      <FighterCard
        gym={"Team Tieu"}
        first_name={"Chu"}
        last_name={"Lam"}
        discipline={"Muay Thai"}
        location={"London"}
        strikes={strikes}
        picture_url={`/src/assets/ChuLam_PFP.jpg`}
      />
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

export default Home;
