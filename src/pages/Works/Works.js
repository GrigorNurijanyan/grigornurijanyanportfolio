"use client";
import React from "react";
import Container from "@/components/Container/Container";
import Title from "@/components/Title/Title";
import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import { motion } from "framer-motion";
import { worksList } from "./workList";

const Works = () => {
  return (
    <div className="bg-blue-700 w-full">
      <Container>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Title className={"text-white"}>Works</Title>
        </motion.div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
          {worksList.map((item, index) => {
            return (
              <motion.div
                key={index}
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                whileHover={{ scale: 0.9 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card
                  key={index}
                  isPressable
                  isBlurred
                  className="py-4"
                  onPress={() => {
                    window.open(item.link, "_blank");
                  }}
                >
                  <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <h4 className="font-bold text-large">{item.name}</h4>
                  </CardHeader>
                  <CardBody className="overflow-visible py-2">
                    <Image
                      alt="Card background"
                      className="object-cover rounded-xl"
                      src={item.image}
                    />
                  </CardBody>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default Works;
