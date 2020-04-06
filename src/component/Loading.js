import React from "react";
import loadingGif from "../images/gif/loading-arrow.gif";
const Loading = () => {
  return (
    <div className="loading " align= "center">
      <h4>Cars Data Loading....</h4>
      <img src={loadingGif} alt="" />
    </div>
  );
};

export default Loading;
