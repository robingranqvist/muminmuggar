import { useState } from "react";

import ToolTip from "@components/Mugs/ToolTip/ToolTip";

import { ReactComponent as IconLabel } from "@/assets/icons/icon__label.svg";
import { ReactComponent as IconNoLabel } from "@/assets/icons/icon__no-label.svg";
import { ReactComponent as IconHelp } from "@/assets/icons/icon__help.svg";

function MugPrice({ priceWithLabel, priceWithoutLabel, hasLabel }) {
  const [showLabelToolTip, setShowLabelToolTip] = useState(false);
  const [showNoLabelToolTip, setShowNoLabelToolTip] = useState(false);

  return (
    <div className="mug__stats">
      <div className="mug__stats-items">
        <div className="mug__stats-item">
          <IconLabel
            fill={hasLabel === "label" ? "green" : "#000"}
            alt={"Med etikett"}
            className="mug__stats-icon"
            onMouseOver={() => {
              setShowLabelToolTip(true);
            }}
            onMouseOut={() => {
              setShowLabelToolTip(false);
            }}
          />

          {showLabelToolTip && (
            <ToolTip text={"Uppskattat pris för mugg med etikett"} />
          )}
          <p>
            {priceWithLabel[0]}€-{priceWithLabel[1]}€
          </p>
        </div>
        <div className="mug__stats-item">
          <IconNoLabel
            fill={hasLabel === "noLabel" ? "green" : "#000"}
            alt={"Utan etikett"}
            className="mug__stats-icon"
            onMouseOver={() => {
              setShowNoLabelToolTip(true);
            }}
            onMouseOut={() => {
              setShowNoLabelToolTip(false);
            }}
          />
          {showNoLabelToolTip && (
            <ToolTip text={"Uppskattat pris för mugg utan etikett"} />
          )}
          <p>
            {priceWithoutLabel[0]}€-{priceWithoutLabel[1]}€
          </p>
        </div>
      </div>
      <IconHelp alt={"Hjälp"} className="mug__stats-icon" />
    </div>
  );
}

export default MugPrice;
