import "./EditFighter.scss";

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import FighterCard from "../../components/FighterCard/FighterCard";
import FightersResponse from "../../types/FighterResponse";
import OptionType from "../../types/OptionType";
import FightersRequest from "../../types/FighterRequest";
import { getFighterRequest } from "../../utils/fighters";
import CustomForm from "../../components/Form/Form";
import StrikeResponse from "../../types/StrikeResponse";

type EditFighterProps = {
  fighters: OptionType[];
  strikes: StrikeResponse[];
};

const getFormFighters = (fighter: FightersResponse) => {
  return {
    id: fighter.id,
    first_name: fighter.first_name,
    last_name: fighter.last_name,
    gym: fighter.gym,
    location: fighter.location,
    discipline: fighter.discipline,
    age: fighter.age,
  };
};

const EditFighter = ({ fighters, strikes }: EditFighterProps) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [fighter, setFighter] = useState<FightersResponse | null>(null);
  const [showForm, setShowForm] = useState(false);

  const getFighterId = async (id: number) => {
    const response = await fetch(`http://localhost:8080/fighters/${id}`);
    const fighterData = await response.json();
    setFighter(fighterData);
  };

  useEffect(() => {
    getFighterId(Number(id));
  }, [id]);

  const handleUpdateFighter = async (updatedFighter: FightersRequest) => {
    const result = await fetch(`http://localhost:8080/fighters/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: getFighterRequest(updatedFighter),
    });
    if (result.ok) {
      alert("Fighter updated successfully");
      const updated = await result.json();
      setFighter(updated);
    } else {
      const message = await result.text();
      alert(message);
    }
  };

  const handleDeleteFighter = async () => {
    const result = await fetch(`http://localhost:8080/fighters/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (result.ok) {
      alert("Fighter deleted successfully");
      navigate("/");
    } else {
      const message = await result.text();
      alert(message);
    }
  };

  const handleShowForm = () => setShowForm(!showForm);

  const formFighter: FightersRequest | null = fighter
    ? getFormFighters(fighter)
    : null;
  return (
    <div className="edit-fighter">
      <h2 className="edit-fighter__title">Edit Fighter</h2>
      <div className="edit-fighter__content">
        {fighter ? (
          <FighterCard fighters={fighter} />
        ) : (
          <p>Loading fighter data...</p>
        )}
        <div className="edit-fighter__buttons">
          <button
            className={
              showForm
                ? "edit-fighter__button"
                : "edit-fighter__button edit-fighter__button--secondary"
            }
            onClick={handleShowForm}
          >
            Update
          </button>
          <button
            className={
              showForm
                ? "edit-fighter__button"
                : "edit-fighter__button edit-fighter__button--secondary"
            }
            onClick={handleDeleteFighter}
          >
            Delete
          </button>
        </div>
      </div>
      {showForm && formFighter && (
        <CustomForm
          defaultFormState={formFighter}
          formTitle="Update Fighter"
          handleSubmit={handleUpdateFighter}
          strikes={strikes}
        />
      )}
    </div>
  );
};
