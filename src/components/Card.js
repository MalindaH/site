import React from "react";
import "./Card.css";
import CardItem from "./CardItem";

import pic1 from "../images/project1.png";
import pic2 from "../images/project2.jpg";
import pic3 from "../images/project3.png";
import pic4 from "../images/project4.png";

function Cards() {
  return (
    <div className="cards">
      <h1>My Projects</h1>
      <div className="cards__container">
        <div className="cards__wrapper row">
          <ul className="cards__items col-12 col-sm-6">
            <CardItem
              src={pic1}
              text="McGill CSSA Official Website"
              label="Web Development"
              path="https://mcgillcssa.herokuapp.com/"
            />
          </ul>
          <ul className="cards__items col-12 col-sm-6">
          <CardItem
              src={pic2}
              text="Machine learning for analyzing datasets"
              label="Machine Learning"
              path="https://github.com/MalindaH/machine-learning"
            />
          </ul>
          <ul className="cards__items col-12 col-sm-6">
            <CardItem
              src={pic3}
              text="Unity Game: STRANDED"
              label="Game Development"
              path="https://mikegao.itch.io/stranded"
            />
          </ul>
          <ul className="cards__items col-12 col-sm-6">
            <CardItem
              src={pic4}
              text="My Portfolio Website"
              label="Web Development"
              path="https://malindah.github.io/site/"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
