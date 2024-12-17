import React, { memo } from "react";
import Image from "next/image";
import ContactImg from "../../assets/contact.jpg";
import { Button, Input, Textarea } from "@nextui-org/react";
import { motion } from "framer-motion";
import { Resend } from "resend";
import P from "@/components/HtmlTags/P";
import Div from "@/components/HtmlTags/Div";

const resend = new Resend("re_8HrTv1gH_GFbfQTq9suxM8sxuqYaLb4LZ");

const ContactSection = () => {
  return (
    <Div
      id={"contactPage"}
      className="flex flex-col-reverse sm:flex-row w-full"
    >
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
        <P className="text-md2 font-medium">Contact</P>
        <Div className="grid gap-5 mt-10">
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
          <Button
            className="w-fit"
            onClick={() => {
              try {
                resend.emails.send({
                  from: "onboarding@resend.dev",
                  to: "grigornurijanyan@gmail.com",
                  subject: "Hello World",
                  html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
                });
              } catch (error) {
                console.error("error", error);
              }
            }}
          >
            Send Message
          </Button>
        </Div>
      </motion.div>
    </Div>
  );
};

export default memo(ContactSection);
