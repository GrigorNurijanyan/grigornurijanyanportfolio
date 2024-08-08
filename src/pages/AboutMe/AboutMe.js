import Container from "@/components/Container/Container";
import Title from "@/components/Title/Title";
import React from "react";

const AboutMe = () => {
  return (
    <Container>
      <Title>About Me</Title>
      <div className="grid xl:grid-cols-3 gap-4 md:grid-cols-1">
        <div className="grid gap-1">
          <div className="flex items-center">
            <span className="min-w-24 font-bold text-md">Full Name:</span>
            <span>Grigor Nurijanyan</span>
          </div>
          <div className="flex items-center">
            <span className="min-w-24 font-bold text-md">Phone:</span>
            <span>+37477254462</span>
          </div>
          <div className="flex items-center">
            <span className="min-w-24 font-bold text-md">Email:</span>
            <span>grigornurijanyan@gmail.com</span>
          </div>
          <div className="flex items-center">
            <span className="min-w-24 font-bold text-md">Address:</span>
            <span>Yerevan, Armenia</span>
          </div>
        </div>
        <div className="col-span-2">
          <p className="text-md1 font-medium mb-2">Hello There!</p>
          <p className="text-md font-regular mb-2">
            I am an experienced Front-End Developer specializing in ReactJS,
            with over 5 years in web development. My expertise includes
            JavaScript, TypeScript, HTML/CSS, Redux, and design tools like Adobe
            XD and Figma. I excel in creating user-centric web applications and
            have a strong ability to collaborate effectively with international
            teams.
          </p>
          <p className="text-md font-regular">
            My skills in problem-solving and attention to detail are evident in
            my work on various high-impact projects, where I focus on enhancing
            user experience through meticulous coding and design integration. I
            am proficient in multiple languages and hold a Bachelor and Master's
            degree in Computer Science from the National Polytechnic University
            of Armenia. My work is driven by a commitment to quality and a
            passion for continuous learning and innovation in the field of web
            development.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default AboutMe;
