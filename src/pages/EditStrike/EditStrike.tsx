import "./EditStrike.scss";

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CustomForm from "../../components/Form/Form";
import StrikeResponse from "../../types/StrikeResponse";
import StrikeCard from "../../components/StrikeCard/StrikeCard";
import Loading from "../../components/Loading/Loading";

type EditStrikeProps = {
  strikes: StrikeResponse[];
};

const EditStrike = ({ strikes }: EditStrikeProps) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [strikeData, setStrikeData] = useState<StrikeResponse | null>(null);
  const [showForm, setShowForm] = useState(false);

  const getStrikeById = async (id: number) => {
    const response = await fetch(`http://localhost:8080/strike/${id}`);
    const strikeData = await response.json();
    setStrikeData(strikeData);
  };

  useEffect(() => {
    getStrikeById(Number(id));
  }, [id]);

  const handleUpdateStrike = async (updatedStrike: StrikeResponse) => {
    const result = await fetch(`http://localhost:8080/strike/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedStrike),
    });
    if (result.ok) {
      alert("Strike updated successfully");
      const updated = await result.json();
      setStrikeData(updated);
    } else {
      const message = await result.text();
      alert(message);
    }
  };

  const handleDeleteStrike = async () => {
    const result = await fetch(`http://localhost:8080/strike/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (result.ok) {
      alert("Strike deleted successfully");
    } else {
      const message = await result.text();
      alert(message);
    }
    navigate("/");
    window.location.reload();
  };

  const handleShowForm = () => setShowForm(!showForm);

  if (!strikeData) return <Loading />;

  return (
    <div className="edit-strike">
      <h1 className="edit-strike__title">Edit Strike</h1>
      <div className="edit-strike__content">
        {strikes ? (
          <StrikeCard
            id={strikeData.id}
            video_url_tutorial={strikeData.video_url_tutorial}
            video_url_fighter={strikeData.video_url_fighter}
            strike_type={strikeData.strike_type}
            name={strikeData.name}
            speed={strikeData.speed}
            power={strikeData.power}
          />
        ) : (
          <p>Loading strike data...</p>
        )}

        <div className="edit-strike__buttons">
          <button
            className={
              showForm
                ? "edit-strike__button"
                : "edit-strike__button edit-strike__button--secondary"
            }
            onClick={handleShowForm}
          >
            Update
          </button>
          <button
            className={
              showForm
                ? "edit-strike__button"
                : "edit-strike__button edit-strike__button--secondary"
            }
            onClick={handleDeleteStrike}
          >
            Delete
          </button>
          {showForm && (
            <CustomForm
              defaultFormData={strikeData}
              formTitle="Edit Strike"
              handleSubmit={handleUpdateStrike}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default EditStrike;
