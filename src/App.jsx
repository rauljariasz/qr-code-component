import React from "react";
import QR from "./assets/image-qr-code.png";
import "./styles.css";

const App = () => {
  return (
    <div className="main">
      <div className="flex">
        <div className="cardContainer">
          <img src={QR} alt="" />
          <div className="textContainer">
            <p className="textBold">
              Improve your front-end skills by building projects
            </p>
            <p className="text">
              Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
