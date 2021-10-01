import Lottie from "react-lottie";
import loading from "../../assets/lottie/loading.json";

const Loading = ({ height, width }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Lottie
      options={defaultOptions}
      height={height || 30}
      width={width || 100}
    />
  );
};

export default Loading;
