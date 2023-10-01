import { MouseEventHandler } from "react";
import "./Button.scss";

type ButtonProps = {
  label: string;
  variant?: "secondary";
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const Button = ({ label, variant, onClick }: ButtonProps) => {
  return (
    <div>
      <button
        className={variant ? `button button--${variant}` : "button"}
        onClick={onClick}
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
