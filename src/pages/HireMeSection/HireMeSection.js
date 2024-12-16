import React from "react";
import Title from "@/components/Title/Title";
import Container from "@/components/Container/Container";
import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import Div from "@/components/HtmlTags/Div";
import P from "@/components/HtmlTags/P";

const HireMeSection = () => {
  return (
    <Div className="bg-blue-700 w-full">
      <Container>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Title className={"text-white mb-10"}>Hire Me!</Title>
          <P className={"text-white text-center max-w-screen-md mx-auto"}>
            <strong className="text-md1 block">
              Looking for a skilled web developer?
            </strong>
            <br />I specialize in creating high-performance, user-friendly
            websites that drive results. With experience in developing and
            maintaining high-traffic sites, I can turn your vision into reality.
            Lets build something great together!
          </P>
          <Button
            onClick={() => {
              const contactPart = document.getElementById("contactPage");
              if (contactPart) {
                contactPart.scrollIntoView({
                  behavior: "smooth",
                });
              }
            }}
            className={"flex mx-auto mt-5"}
          >
            Contact Me
          </Button>
        </motion.div>
      </Container>
    </Div>
  );
};

export default HireMeSection;
