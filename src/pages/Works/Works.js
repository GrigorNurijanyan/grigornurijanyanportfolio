"use client";
import React from "react";
import Container from "@/components/Container/Container";
import Title from "@/components/Title/Title";
import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";

const Works = () => {
  return (
    <div className="bg-blue-700 w-full">
      <Container>
        <Title className={"text-white"}>Works</Title>
        <div className="grid lg:grid-cols-3 lg:gap-5">
          <Card
            isPressable
            isBlurred
            className="py-4"
            onPress={() => {
              window.open("https://matador.ai/", "_blank");
            }}
          >
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <h4 className="font-bold text-large">Matador AI</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src="http://localhost:3000/publicAssets/matador.jpg"
              />
            </CardBody>
          </Card>
          <Card
            isPressable
            isBlurred
            className="py-4"
            onPress={() => {
              window.open("https://14cargo.ru/", "_blank");
            }}
          >
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <h4 className="font-bold text-large">14cargo</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src="http://localhost:3000/publicAssets/14cargo.jpg"
              />
            </CardBody>
          </Card>
          <Card
            isPressable
            isBlurred
            className="py-4"
            onPress={() => {
              window.open("https://ubicross.pro/", "_blank");
            }}
          >
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <h4 className="font-bold text-large">Ubicross Pro</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src="http://localhost:3000/publicAssets/ubicrosspro.jpg"
              />
            </CardBody>
          </Card>
          <Card
            isPressable
            isBlurred
            className="py-4"
            onPress={() => {
              window.open("http://anthonyprichards.com/", "_blank");
            }}
          >
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <h4 className="font-bold text-large">Anthony P. Richards</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src="http://localhost:3000/publicAssets/anthonyprichards.jpg"
              />
            </CardBody>
          </Card>
          <Card
            isPressable
            isBlurred
            className="py-4"
            onPress={() => {
              window.open("https://matador.ai/", "_blank");
            }}
          >
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <h4 className="font-bold text-large">Matador Web Extension</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src="http://localhost:3000/publicAssets/matadorextension.jpg"
              />
            </CardBody>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default Works;
