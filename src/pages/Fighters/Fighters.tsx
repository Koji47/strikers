import Nav from "../../components/Nav/Nav";

const Fighters = () => {
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
    </>
  );
};

export default Fighters;
