import SVGWorkExperianceIcon from "@/assets/SVG/SVGWorkExperianceIcon";
import SVGEducationIcon from "@/assets/SVG/SVGEducationIcon";

export const timelineElements = [
  {
    title: "Work Experience",
    children: [
      {
        role: "FrontEnd Developer",
        companyName: "Ubicross Labs",
        from: "Jul 2018",
        to: "Present",
        description: [
          "Lead the FrontEnd Development of various large scale, high-traffic web applications (including Metador.ai, araqich.com, yerazkids.am, 14cargo.ru) collaborating with an international team of experts from various disciplines to create and maintain a robust and user-friendly application.",
          "Engaged in refactoring of code bases, as needed, to create new reusable components modernizing and optimizing application performance, enhancing maintainability.",
          "Contributed to the overall architecture and scalability of applications, incorporating modern technologies such as ReactJS, Redux, TypeScript and other JavaScript frameworks.",
          "Worked closely with UI/UX designers to implement concepts developed in Adobe XD and Figma, ensuring the final product matches design specifications and enhances product usability.",
          "Applied problem-solving and critical-thinking skills, coupled with proficiency in recognizing challenges, to organize and lead projects contributing to their successful launch.",
        ],
        icon: <SVGWorkExperianceIcon />,
      },
      {
        role: "System Admin",
        companyName: "IT-Micronetworks",
        from: "Feb 2017",
        to: "June 2018",
        description: [
          "Setting up and configuring hardware, software and network components for large private companies in various sectors.",
          "Diagnosed and solved complex issues by engaging with a wide range of customers and providing hands on technical support.",
          "Demonstrated excellent communication skills by effectively interacting with interested customers increasing sales and customer loyalty.",
        ],
        icon: <SVGWorkExperianceIcon />,
      },
    ],
  },
  {
    id: "education",
    title: "Education",
    children: [
      {
        role: "Masters Degree",
        companyName: "National Polytechnic University of Armenia",
        from: "Sep 2019",
        to: "May 2021",
        description: ["Master of Science in Computer Science"],
        icon: <SVGEducationIcon />,
      },
      {
        role: "Bachelors Degree",
        companyName: "National Polytechnic University of Armenia",
        from: "Sep 2015",
        to: "May 2019",
        description: ["Bachelors of Science in Computer Science"],
        icon: <SVGEducationIcon />,
      },
    ],
  },
];
