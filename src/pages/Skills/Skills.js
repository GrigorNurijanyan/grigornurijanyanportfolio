import Container from "@/components/Container/Container";
import Title from "@/components/Title/Title";
import { CircularProgress } from "@nextui-org/react";
import React from "react";
import { skillsList } from "./skillsList";

const Skills = () => {
  return (
    <Container>
      <Title>Skills</Title>
      <div className="grid lg:grid-cols-5 lg:gap-5">
        {skillsList.map((item, index) => {
          return (
            <CircularProgress
              key={index}
              label={item.name}
              size="lg"
              value={item.percent}
              strokeWidth={2}
              classNames={{
                svg: "w-36 h-36",
                value: "text-3xl font-semibold",
              }}
              color="primary"
              formatOptions={{ style: "percent" }}
              showValueLabel={true}
            />
          );
        })}
      </div>
    </Container>
  );
};

export default Skills;
