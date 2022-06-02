import React from "react";
import "./home.css";

const Home = (props) => {
  return (
    <div className="main-container">
      <h1 className="header">Nihar Sonawane</h1>
      <h3>
        You can contact me at{" "}
        <a className="email-header" href="mailto:niharsonawane@gmail.com">
          niharsonawane@gmail.com
        </a>
      </h3>
    </div>
  );
};

export default Home;
