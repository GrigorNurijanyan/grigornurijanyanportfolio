import React from "react";
import Image from "next/image";
import ContactImg from "../../assets/contact.jpg";
import { Button, Input, Textarea } from "@nextui-org/react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="flex flex-col-reverse sm:flex-row w-full">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="sm:w-1/2 w-full"
      >
        <Image
          alt="Contact Image"
          className="object-cover h-[55rem]"
          src={ContactImg}
        />
      </motion.div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="sm:w-1/2 w-full sm:p-10 p-5"
      >
        <p className="text-md2 font-medium">Contact</p>
        <div className="grid gap-5 mt-10">
          <Input
            type="email"
            label="Your Firstname"
            labelPlacement="outside"
            placeholder="Enter your first name"
            className="md:w-1/2 w-full"
            size={"lg"}
            variant="bordered"
          />
          <Input
            type="email"
            label="Your Lastname"
            labelPlacement="outside"
            placeholder="Enter your last name"
            className="md:w-1/2 w-full"
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
      </motion.div>
    </div>
  );
};

export default Contact;
