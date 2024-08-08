import React from "react";
import Title from "@/components/Title/Title";
import Container from "@/components/Container/Container";
import { Button } from "@nextui-org/react";

const HireMe = () => {
  return (
    <div className="bg-blue-700 w-full">
      <Container>
        <Title className={"text-white mb-10"}>Hire Me!</Title>
        <p className={"text-white text-center max-w-screen-md mx-auto"}>
          <strong className="text-md1 block">
            Looking for a skilled web developer?
          </strong>
          <br />I specialize in creating high-performance, user-friendly
          websites that drive results. With experience in developing and
          maintaining high-traffic sites, I can turn your vision into reality.
          Let's build something great together!
        </p>
        <Button className={"flex mx-auto mt-5"}>Contact Me</Button>
      </Container>
    </div>
  );
};

export default HireMe;
