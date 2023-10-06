import { CSSProperties } from "react";
import "./Loading.scss";
import CircleLoader from "react-spinners/CircleLoader";

const circleLoaderStyles: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  margin: "auto",
  marginTop: "40vh",
};

const Loading = () => {
  return (
    <>
      <CircleLoader
        color="#ffed8a"
        loading
        size={150}
        cssOverride={circleLoaderStyles}
      />
      <h1 className="loading-text">Loading...</h1>
    </>
  );
};

export default Loading;
