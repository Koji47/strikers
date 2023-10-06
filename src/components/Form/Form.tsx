import { ChangeEvent, FormEvent, useState } from "react";
import StrikeResponse from "../../types/StrikeResponse";
import "./Form.scss";

type CustomFormProps = {
  defaultFormData: StrikeResponse;
  formTitle: string;
  handleSubmit: (updatedStrike: StrikeResponse) => void;
};

const CustomForm = ({
  defaultFormData,
  formTitle,
  handleSubmit,
}: CustomFormProps) => {
  const [formData, setFormData] = useState<StrikeResponse>(defaultFormData);

  const handleValidation = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSubmit(formData);
  };

  const handleInput = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    key: keyof StrikeResponse
  ) => {
    setFormData({ ...formData, [key]: event.currentTarget.value });
  };

  return (
    <div className="Form-container">
      <h1 className="Form-container__title">{formTitle}</h1>
      <form className="Form-container__form" onSubmit={handleValidation}>
        <h4 className="Form-container__subtitle">Name:</h4>
        <input
          id="name"
          className="Form-container__input"
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(event) => handleInput(event, "name")}
        />
        <h4 className="Form-container__subtitle">Power:</h4>
        <select
          id="power"
          className="Form-container__input"
          value={formData.power}
          onChange={(event) => handleInput(event, "power")}
        >
          <option value="★☆☆☆☆">★☆☆☆☆</option>
          <option value="★★☆☆☆">★★☆☆☆</option>
          <option value="★★★☆☆">★★★☆☆</option>
          <option value="★★★★☆">★★★★☆</option>
          <option value="★★★★★">★★★★★</option>
        </select>

        <h4 className="Form-container__subtitle">Speed:</h4>
        <select
          id="speed"
          className="Form-container__input"
          value={formData.speed}
          onChange={(event) => handleInput(event, "speed")}
        >
          <option value="★☆☆☆☆">★☆☆☆☆</option>
          <option value="★★☆☆☆">★★☆☆☆</option>
          <option value="★★★☆☆">★★★☆☆</option>
          <option value="★★★★☆">★★★★☆</option>
          <option value="★★★★★">★★★★★</option>
        </select>

        <h4 className="Form-container__subtitle">Strike Type:</h4>
        <select
          id="strike_type"
          className="Form-container__input"
          value={formData.strike_type}
          onChange={(event) => handleInput(event, "strike_type")}
        >
          <option value={"Punch"}>Punch</option>
          <option value={"Kick"}>Kick</option>
        </select>

        <h4 className="Form-container__subtitle">Fighter Exmaple Video:</h4>
        <input
          id="video_url_fighter"
          className="Form-container__input"
          type="text"
          placeholder="Fighter Video URL"
          value={formData.video_url_fighter}
          onChange={(event) => handleInput(event, "video_url_fighter")}
        />

        <h4 className="Form-container__subtitle">Tutorial Video:</h4>
        <input
          id="video_url_tutorial"
          className="Form-container__input"
          type="text"
          placeholder="Tutorial Video URL"
          value={formData.video_url_tutorial}
          onChange={(event) => handleInput(event, "video_url_tutorial")}
        />

        <button type="submit" className="Form-container__button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CustomForm;
