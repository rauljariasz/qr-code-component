import React from "react";
import QR from "./assets/image-qr-code.png";
import "./styles.css";

const App = () => {
  return (
    <main className="main">
      <div className="flex">
        <section className="cardContainer">
          <img src={QR} alt="" />
          <div className="textContainer">
            <h1 className="textBold">
              Improve your front-end skills by building projects
            </h1>
            <p className="text">
              Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default App;
