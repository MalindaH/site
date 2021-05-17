import React from "react";
import Header from "../components/Header";
import Particles from "react-particles-js";

import Projects from "./Projects"
import Timeline from "../components/TimelineWork";
import hello from "../images/hello.jpg";

export default function Home() {
  return (
    <>
      <Particles
        className="particles"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: "white",
              },
            },
          },
        }}
      />
      <Header />

      <div className="row my-intro">
        <img className="col-12 col-sm-5 col-md-3" src={hello} alt="my-icon"/>
        <div className="col-12 col-sm-7 col-md-9 mt-auto mb-auto">
          <p>
            Hi there! My name is Linhui Huang and I also go by Malinda. I am a
            third- year (U2) student at McGill University, studying Computer
            Science and Biology Joint Honours Program.
            <br />I have 3+ years of experience building programs, websites, and
            games, with proficient knowledge in computer science, statistics,
            machine learning, and biology.
          </p>
        </div>
      </div>

      <Projects />

      <h1 className="text-center mt-5">Work Experience</h1>
      <Timeline />
    </>
  );
}
