import React from "react";
import Container from "@/components/Container/Container";
import Title from "@/components/Title/Title";
import Timeline from "@/components/Timeline/Timeline";
import { timelineElements } from "./timelienEvents";

const MyResume = () => {
  return (
    <Container>
      <Title>My Resume</Title>
      <Timeline events={timelineElements} />
    </Container>
  );
};

export default MyResume;
