import Lottie from "react-lottie";
import lottie__loading from "@/assets/lottie/lottie__loading.json";

import "./LottieLoading.css";

function LottieLoading() {
  const options = {
    loop: false,
    autoplay: true,
    animationData: lottie__loading,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="lottie__loading-wrapper">
      <Lottie options={options} height={100} width={100} />
    </div>
  );
}

export default LottieLoading;
