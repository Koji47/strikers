import { ChangeEvent, FormEvent, useState } from "react";
import FightersRequest from "../../types/FighterRequest";
import OptionType from "../../types/OptionType";
import "./Form.scss";
import Select from "../Select/Select";

type FormProps = {
  defaultFormState: FightersRequest;
  formTitle: string;
  handleSubmit: (fighter: FightersRequest) => void;
  strikes: OptionType[];
};

const Form = ({
  defaultFormState,
  formTitle,
  handleSubmit,
  strikes,
}: FormProps) => {
  const [Fighter, setFighter] = useState<FightersRequest>(defaultFormState);

  const handleValidation = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (Object.values(Fighter).some((value) => !value)) {
      alert("Missing fields, unable to create");
      return;
    }

    handleSubmit(Fighter);
  };

  const handleInput = (
    event: FormEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>,
    key: string
  ) => {
    setFighter({ ...Fighter, [key]: event.currentTarget.value });

    return (
      <div className="Form-container">
        <h1 className="Form-container__title">{formTitle}</h1>
        <form className="Form-container__form" onSubmit={handleValidation}>
          <input
            id="first_name"
            className="Form-container__input"
            type="text"
            placeholder="First Name"
            value={Fighter.first_name}
            onInput={(event) => handleInput(event, "first_name")}
          />
          <input
            id="last_name"
            className="Form-container__input"
            type="text"
            placeholder="Last Name"
            value={Fighter.last_name}
            onInput={(event) => handleInput(event, "last_name")}
          />
          <input
            id="gym"
            className="Form-container__input"
            type="text"
            placeholder="Gym"
            value={Fighter.gym}
            onInput={(event) => handleInput(event, "gym")}
          />
          <input
            id="location"
            className="Form-container__input"
            type="text"
            placeholder="Location"
            value={Fighter.location}
            onInput={(event) => handleInput(event, "location")}
          />
          <input
            id="discipline"
            className="Form-container__input"
            type="text"
            placeholder="Discipline"
            value={Fighter.discipline}
            onInput={(event) => handleInput(event, "discipline")}
          />
          <input
            id="age"
            className="Form-container__input"
            type="number"
            placeholder="Age"
            value={Fighter.age}
            onInput={(event) => handleInput(event, "age")}
          />

          <Select
            labelText={"Select a Strike 1: "}
            label={"Strike"}
            options={strikes}
            onChange={(event) => handleInput(event, "Strike")}
            defaultOption={"----"}
            defaultValue={Fighter.strikes1.toString()}
          />
          <Select
            labelText={"Select a Strike 2: "}
            label={"Strike"}
            options={strikes}
            onChange={(event) => handleInput(event, "Strike")}
            defaultOption={"----"}
            defaultValue={Fighter.strikes2.toString()}
          />
          <Select
            labelText={"Select a Strike 3: "}
            label={"Strike"}
            options={strikes}
            onChange={(event) => handleInput(event, "Strike")}
            defaultOption={"----"}
            defaultValue={Fighter.strikes3.toString()}
          />
          <Select
            labelText={"Select a Strike 3: "}
            label={"Strike"}
            options={strikes}
            onChange={(event) => handleInput(event, "Strike")}
            defaultOption={"----"}
            defaultValue={Fighter.strikes3.toString()}
          />
          <button type="submit" className="Form-container__button">
            Submit
          </button>
        </form>
      </div>
    );
  };
};
