import Lottie from "react-lottie";
import lottie__checkmark from "@/assets/lottie/lottie__checkmark.json";

import "./LottieSaved.css";

function LottieSaved() {
  const options = {
    loop: false,
    autoplay: true,
    animationData: lottie__checkmark,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="lottie__saved-wrapper">
      <Lottie options={options} height={200} width={200} />
    </div>
  );
}

export default LottieSaved;
