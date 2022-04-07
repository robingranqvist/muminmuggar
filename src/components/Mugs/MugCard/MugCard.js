import { useState } from "react";
import classNames from "classnames";

import Select from "@components/Mugs/Select/Select";
import MugPrice from "@components/Mugs/MugPrice/MugPrice";

import "./MugCard.css";

import LottieSaved from "@/lottie/LottieSaved/LottieSaved";
import LottieLoading from "@/lottie/LottieLoading/LottieLoading";

function MugCard({
  name,
  img,
  priceWithLabel,
  priceWithoutLabel,
  setSavedMugs,
  savedMugs,
}) {
  const [isSaved, setIsSaved] = useState(false);
  const [hasLabelSelection, setHasLabelSelection] = useState(false);
  const [playLottie, setPlayLottie] = useState(false);
  const [mugLoaded, setMugLoaded] = useState(false);
  const [hasLabel, setHasLabel] = useState("");

  const handleLabelSelection = (label) => {
    const price = label ? priceWithLabel : priceWithoutLabel;
    setHasLabel(label ? "label" : "noLabel");

    setIsSaved(!isSaved);
    setPlayLottie(!isSaved);
    setSavedMugs((currentSavedMugs) => [
      ...currentSavedMugs,
      { name, img, price },
    ]);

    localStorage.setItem("mugs-saved", JSON.stringify(savedMugs));
  };

  const removeMugs = () => {
    setHasLabel("");
    setIsSaved(!isSaved);
    setPlayLottie(!isSaved);
    setSavedMugs(savedMugs.filter((mug) => mug.name !== name));
    localStorage.setItem("mugs-saved", JSON.stringify(savedMugs));
  };

  return (
    <div className="mug__wrapper">
      <div
        onClick={() => {
          if (!isSaved) {
            setHasLabelSelection(!hasLabelSelection);
          } else {
            removeMugs();
          }
        }}
        className={classNames("mug__img-wrapper", {
          "is--saved": isSaved,
          "has--label-selection": hasLabelSelection,
        })}
      >
        <img
          src={img}
          className={classNames("mug__img", {
            "is--saved": isSaved,
            "has--label-selection": hasLabelSelection,
            "is--hidden": !mugLoaded,
          })}
          alt={name}
          onLoad={() => {
            setMugLoaded(true);
          }}
        />

        {hasLabelSelection && (
          <Select handleLabelSelection={handleLabelSelection} />
        )}

        {playLottie && <LottieSaved />}

        {!mugLoaded && <LottieLoading />}
      </div>
      <div className="mug__content-wrapper">
        <h2 className="mug__name">{name}</h2>
        <MugPrice
          priceWithLabel={priceWithLabel}
          priceWithoutLabel={priceWithoutLabel}
          hasLabel={hasLabel}
        />
      </div>
    </div>
  );
}

export default MugCard;
