import React, { memo } from "react";
import Container from "@/components/Container/Container";
import Title from "@/components/Title/Title";
import { motion } from "framer-motion";
import { contactInfo } from "@/app/data/contactInfo";
import Div from "@/components/HtmlTags/Div";
import P from "@/components/HtmlTags/P";
import Span from "@/components/HtmlTags/Span";

const AboutMeSection = () => {
  return (
    <Container>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Title>About Me</Title>
      </motion.div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="grid xl:grid-cols-3 gap-4 md:grid-cols-1"
      >
        <Div className="grid gap-1">
          {contactInfo.map((info, index) => (
            <Div className="flex items-center" key={index}>
              <Span className="min-w-24 font-bold text-md">{info.label}</Span>
              <Span>{info.value}</Span>
            </Div>
          ))}
        </Div>
        <Div className="col-span-2">
          <P className="text-md1 font-medium mb-2">Hello There!</P>
          <P className="text-md font-regular mb-2">
            I am an experienced Front-End Developer specializing in ReactJS,
            with over 5 years in web development. My expertise includes
            JavaScript, TypeScript, HTML/CSS, Redux, and design tools like Adobe
            XD and Figma. I excel in creating user-centric web applications and
            have a strong ability to collaborate effectively with international
            teams.
          </P>
          <P className="text-md font-regular">
            My skills in problem-solving and attention to detail are evident in
            my work on various high-impact projects, where I focus on enhancing
            user experience through meticulous coding and design integration. I
            am proficient in multiple languages and hold a Bachelor and Masters
            degree in Computer Science from the National Polytechnic University
            of Armenia. My work is driven by a commitment to quality and a
            passion for continuous learning and innovation in the field of web
            development.
          </P>
        </Div>
      </motion.div>
    </Container>
  );
};

export default memo(AboutMeSection);
