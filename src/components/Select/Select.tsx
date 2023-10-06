import { ChangeEventHandler } from "react";
import OptionType from "../../types/OptionType";
import "./Select.scss";

type SelectProps = {
  options: OptionType[];
  onChange: ChangeEventHandler<HTMLSelectElement>;
  labelText: string;
  label: string;
  defaultOption: string;
  defaultValue?: string;
};

const Select = ({
  options,
  onChange,
  labelText,
  label,
  defaultOption,
  defaultValue = "",
}: SelectProps) => {
  return (
    <>
      <div className="select-container">
        <label htmlFor={label}>{labelText}</label>
        <select
          name={label}
          id={label}
          onChange={onChange}
          value={defaultValue}
        >
          {<option value={defaultOption}>{defaultOption}</option>}
          {options.map(({ name, id }) => (
            <option
              key={label + id}
              value={id}
              data-name={name.split(" ").join("-").toLowerCase()}
            >
              {name}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Select;
