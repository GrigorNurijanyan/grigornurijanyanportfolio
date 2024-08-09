import React from "react";
import Container from "@/components/Container/Container";
import Title from "@/components/Title/Title";
import Timeline from "@/components/Timeline/Timeline";
import { timelineElements } from "./timelienEvents";
import { motion } from "framer-motion";

const MyResume = () => {
  return (
    <Container>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Title>My Resume</Title>
      </motion.div>
      <Timeline events={timelineElements} />
    </Container>
  );
};

export default MyResume;
