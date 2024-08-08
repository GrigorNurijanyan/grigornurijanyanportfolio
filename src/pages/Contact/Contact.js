import React from "react";
import Image from "next/image";
import ContactImg from "../../assets/contact.jpg";
import { Button, Input, Textarea } from "@nextui-org/react";

const Contact = () => {
  return (
    <div className="flex w-full">
      <Image
        alt="Contact Image"
        className="object-cover w-1/2 h-[55rem]"
        src={ContactImg}
      />
      <div className="w-1/2 p-10">
        <p className="text-md2 font-medium">Contact</p>
        <div className="grid gap-5 mt-10">
          <Input
            type="email"
            label="Your Firstname"
            labelPlacement="outside"
            placeholder="Enter your first name"
            className="w-1/2"
            size={"lg"}
            variant="bordered"
          />
          <Input
            type="email"
            label="Your Lastname"
            labelPlacement="outside"
            placeholder="Enter your last name"
            className="w-1/2"
            size={"lg"}
            variant="bordered"
          />
          <Input
            type="email"
            label="Email Address"
            labelPlacement="outside"
            placeholder="Enter your email address"
            className="w-full"
            size={"lg"}
            variant="bordered"
          />
          <Input
            type="email"
            label="Email Subject"
            labelPlacement="outside"
            placeholder="Enter your email subject"
            className="w-full"
            size={"lg"}
            variant="bordered"
          />
          <Textarea
            label="Message"
            labelPlacement="outside"
            placeholder="Enter your text here"
            className="w-full"
            size={"lg"}
            minRows={8}
            variant="bordered"
          />
          <Button className="w-fit">Send Message</Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
