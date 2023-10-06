import { useNavigate } from "react-router-dom";
import StrikeResponse from "../../types/StrikeResponse";
import CustomForm from "../../components/Form/Form";
import Loading from "../../components/Loading/Loading";

type CreateStrikeProps = {
  strikes: StrikeResponse[];
};

const CreateStrike = ({ strikes }: CreateStrikeProps) => {
  const navigate = useNavigate();

  const handleSubmit = async (newStrike: StrikeResponse) => {
    const result = await fetch(`http://localhost:8080/strike`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newStrike),
    });
    console.log(newStrike);
    if (result.ok) {
      alert("Strike added successfully");
      const strike = await result.json();

      navigate("/strike/" + strike.id);
      window.location.reload();
    } else {
      const message = await result.text();
      console.log(newStrike);
      alert(message);
    }
  };

  if (!strikes) return <Loading />;

  return (
    <div className="add-strike">
      <div className="add-strike__content">
        <CustomForm
          defaultFormData={{
            id: 0,
            name: "name",
            power: "★★☆☆☆",
            speed: "★★☆☆☆",
            strike_type: "Punch",
            video_url_fighter:
              "https://www.youtube.com/embed/dQw4w9WgXcQ?si=L-qQAPKWlixZJ3aO",
            video_url_tutorial:
              "https://www.youtube.com/embed/dQw4w9WgXcQ?si=L-qQAPKWlixZJ3aO",
          }}
          formTitle="Create Strike"
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default CreateStrike;
