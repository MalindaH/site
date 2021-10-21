import React from "react";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";

const Hometimeline = () => {
  return (
    <div>
      <Timeline lineColor={"#ddd"}>
        <TimelineItem
          key="001"
          dateText="01/2021 – 04/2021"
          style={{ color: "#e86971" }}
          bodyContainerStyle={{
            background: "#f2f2f2",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)",
          }}
        >
          <h3>Course Assistant, McGill University</h3>
          <h5>COMP 251 Algorithm & Data Structures</h5>
          <h5>Montreal, QC</h5>
          <p>
          <br />
          - Effectively and timely communicated with instructor and students.<br />
          - Developed grading scripts and graded assignments and exams.<br />
          - Held office hours and monitored Piazza.
          </p>
        </TimelineItem>
        <TimelineItem
          key="002"
          dateText="01/2020 – 04/2020"
          style={{ color: "#61b8ff" }}
          dateInnerStyle={{ background: "#61b8ff", color: "#000" }}
          bodyContainerStyle={{
            background: "#f2f2f2",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)",
          }}
        >
          <h3>TEAM Mentor, McGill University</h3>
          <h5>CHEM 120, PHYS 102</h5>
          <h5>Montreal, QC</h5>
          <p>
            <br />
            - Provided help to student questions at tutorials, FRezCa Q&A sessions, and MyCourses discussion board.
          </p>
        </TimelineItem>
        <TimelineItem
          key="003"
          dateText="12/2018 – 01/2020"
          style={{ color: "#ffc220" }}
          dateInnerStyle={{ background: "#ffc220", color: "#000" }}
          bodyContainerStyle={{
            background: "#f2f2f2",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)",
          }}
        >
          <h3>Tutor, PAPER Inc.</h3>
          <h4>Montreal, QC</h4>
          <p>
            <br />
            - Assisted middle school to university level students in understanding concepts and solving problems in Math, Chemistry, Physics, and Biology.<br />
            - Cooperated and communicated with the tutor team to ensure high-quality customer service.
          </p>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default Hometimeline;
