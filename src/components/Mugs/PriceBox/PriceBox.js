import { useEffect, useState } from "react";

import "./PriceBox.css";

function PriceBox({ savedMugs }) {
  const [totalHighPrice, setTotalHighPrice] = useState(0);
  const [totalLowPrice, setTotalLowPrice] = useState(0);

  const handleCalculateTotalPrice = (savedMugs) => {
    let totalHighPrice = 0;
    let totalLowPrice = 0;

    savedMugs.forEach((mug) => {
      totalLowPrice += parseInt(mug.price[0]);
      totalHighPrice += parseInt(mug.price[1]);
    });

    setTotalHighPrice(totalHighPrice);
    setTotalLowPrice(totalLowPrice);
  };

  useEffect(() => {
    handleCalculateTotalPrice(savedMugs);
  }, [savedMugs]);

  return (
    <div className="pricebox__wrapper">
      Uppskattat totalt pris på din samling: ${totalLowPrice} - $
      {totalHighPrice}
    </div>
  );
}

export default PriceBox;
