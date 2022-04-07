import "./MugGrid.css";

import MugCard from "@components/Mugs/MugCard/MugCard";

function MugGrid({ mugs, setSavedMugs, savedMugs }) {
  return (
    <div className="mug-grid__wrapper">
      {mugs.map((mug, index) => {
        return (
          <MugCard
            key={index}
            name={mug.name}
            img={mug.img}
            priceWithLabel={mug.price.label}
            priceWithoutLabel={mug.price.noLabel}
            setSavedMugs={setSavedMugs}
            savedMugs={savedMugs}
          />
        );
      })}
    </div>
  );
}

export default MugGrid;
