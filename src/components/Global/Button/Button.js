import classNames from "classnames";

import "./Button.css";

function Button({ text, onClick, first }) {
  return (
    <button
      onClick={onClick}
      className={classNames("btn", {
        "is--first": first,
      })}
    >
      {text}
    </button>
  );
}

export default Button;
