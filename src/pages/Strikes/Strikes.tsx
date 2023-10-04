import StrikesList from "../../components/StrikesList/StrikesList";
import IconPunch from "../../assets/Icon_punch.png";

const Strikes = () => {
  const strikesData = [
    {
      id: 1,
      name: "Jab",
      speed: "★★★★★",
      power: "★★☆☆☆",
      image_url: IconPunch,
      video_url_tutorial:
        "https://www.youtube.com/embed/FSVcmMd9bR4?si=QenoTqpPoH40sTmY",
      video_url_fighter:
        "https://www.youtube.com/embed/INxfWQrToPY?si=H0qxKL7FJYKiZk0x",
    },
    {
      id: 2,
      name: "Jab",
      speed: "★★★★★",
      power: "★★☆☆☆",
      image_url: IconPunch,
      video_url_tutorial:
        "https://www.youtube.com/embed/FSVcmMd9bR4?si=QenoTqpPoH40sTmY",
      video_url_fighter:
        "https://www.youtube.com/embed/INxfWQrToPY?si=H0qxKL7FJYKiZk0x",
    },
  ];

  return (
    <div>
      <StrikesList strikes={strikesData} />
    </div>
  );
};

export default Strikes;
