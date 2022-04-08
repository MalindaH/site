import React from "react";
import "./Card.css";
import CardItem from "./CardItem";

import pic1 from "../images/project1.png";
import pic2 from "../images/project2.jpg";
import pic3 from "../images/project3.png";
import pic4 from "../images/project4.png";
import pic5 from "../images/project5.png";
import pic6 from "../images/animation.gif";

function Cards() {
  return (
    <div className="cards">
      <h1>My Projects</h1>
      <div className="cards__container">
        <div className="cards__wrapper row">
          <ul className="cards__items col-12 col-sm-6">
            <CardItem
              src={pic5}
              text="App for pharmaceutical research: Smart Clinical Trial Search"
              para="Provide pharmaceutical researchers with the most up-to-date clinical trial information through molecular fingerprint similarity calculation of small molecule drugs."
              label="Computational Biology"
              path="https://github.com/MalindaH/smart-clinical-trial-search"
            />
          </ul>
          <ul className="cards__items col-12 col-sm-6">
            <CardItem
              src={pic1}
              text="McGill CSSA Official Website"
              para="As the IT director, I trained and led the IT support team to develop McGill CSSA official website."
              label="Web Development"
              path="https://www.mcgillcssa.com/"
            />
          </ul>
          <ul className="cards__items col-12 col-sm-6">
          <CardItem
              src={pic2}
              text="Machine learning for analyzing large datasets"
              label="Machine Learning"
              path="https://github.com/MalindaH/machine-learning"
            />
          </ul>
          <ul className="cards__items col-12 col-sm-6">
            <CardItem
              src={pic6}
              text="Physics-based Computer Animation"
              para="Fluid simulation using Moving Least Squares Material Point Method."
              label="Computer Animation"
              path="https://github.com/MalindaH/computer-animation"
            />
          </ul>
          <ul className="cards__items col-12 col-sm-6">
            <CardItem
              src={pic3}
              text="Unity Game: STRANDED"
              para="Developed in McGame Jam 2021."
              label="Game Development"
              path="https://mikegao.itch.io/stranded"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
