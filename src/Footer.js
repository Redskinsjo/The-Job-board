import React from "react";
import "./footer.css";

function Footer(props) {
  return (
    <div className="footer">
      <p>
        Made with <strong>React</strong> at{" "}
        <a className="leReacteur" href="https://www.lereacteur.io/">
          Le Reacteur
        </a>{" "}
        by{" "}
        <a
          className="myGithub"
          href="https://github.com/Redskinsjo?tab=repositories"
        >
          {" "}
          Jonathan Carnos
        </a>
      </p>
    </div>
  );
}

export default Footer;
