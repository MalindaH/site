import React from "react";
import Timeline from "../components/TimelineWork"
import hello from "../images/hello.jpg"

export default function AboutMe() {
  return (
    <>
        <div className='row my-intro'>
            <img className='col-3' src={hello} alt="my-icon"/>
            <div className='col-9 mt-auto mb-auto'>
                <p>
                Hi there! My name is Malinda Huang. I am in my last year (U3) at McGill University, 
                studying Computer Science and Biology Joint Honours Program.<br />
                I have 5+ years of experience building programs, websites, and games, with proficient knowledge in computer 
                science, statistics, machine learning, and biology.
                </p>
            </div>
        </div>
        <h1 className="text-center mt-5">Work Experience</h1>
        <Timeline />
    </>
  );
}
