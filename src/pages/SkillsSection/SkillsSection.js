import Container from "@/components/Container/Container";
import Title from "@/components/Title/Title";
import { CircularProgress } from "@nextui-org/react";
import React, { memo } from "react";
import { skillsList } from "../../app/data/skillsList";
import { motion } from "framer-motion";
import Div from "@/components/HtmlTags/Div";

const SkillsSection = () => {
  const [isShow, setIsShow] = React.useState(false);

  React.useEffect(() => {
    const myPageElement = document.getElementById("worksPart");

    if (myPageElement) {
      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsShow(true);
              observer.unobserve(entry.target);
            }
          });
        },
        {
          root: null,
          threshold: 0.1,
        }
      );

      observer.observe(myPageElement);
    }
  }, []);

  return (
    <Container>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Title>Skills</Title>
      </motion.div>
      <Div
        id={"worksPart"}
        className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2  gap-5"
      >
        {skillsList.map((item, index) => {
          return !isShow ? (
            <CircularProgress
              key={index}
              label={item.name}
              size="lg"
              value={item.percent}
              strokeWidth={2}
              classNames={{
                svg: "w-36 h-36",
                value: "text-3xl font-semibold",
                base: "mx-auto",
              }}
              color="primary"
              formatOptions={{ style: "percent" }}
              showValueLabel={true}
            />
          ) : (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <CircularProgress
                key={index}
                label={item.name}
                size="lg"
                value={item.percent}
                strokeWidth={2}
                classNames={{
                  svg: "w-36 h-36",
                  value: "text-3xl font-semibold",
                  base: "mx-auto",
                }}
                color="primary"
                formatOptions={{ style: "percent" }}
                showValueLabel={true}
              />
            </motion.div>
          );
        })}
      </Div>
    </Container>
  );
};

export default memo(SkillsSection);
