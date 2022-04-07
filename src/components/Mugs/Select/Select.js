import Button from "@components/Global/Button/Button";

import "./Select.css";

function Select({ setHasLabel, handleLabelSelection }) {
  return (
    <div className="select__wrapper">
      <h3>Har din mugg etikett?</h3>
      <div className="btn__wrapper">
        <Button
          text="Ja"
          onClick={() => {
            handleLabelSelection(true);
          }}
          first={true}
        />
        <Button
          text="Nej"
          onClick={() => {
            handleLabelSelection(false);
          }}
        />
      </div>
    </div>
  );
}

export default Select;
