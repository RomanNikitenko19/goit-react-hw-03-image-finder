import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const LoaderSpinner = () => {
  return (
    <Loader
      type="Puff"
      color="#00BFFF"
      height={200}
      width={200}
      timeout={1000} //1 secs
    />
  );
};

export default LoaderSpinner;
