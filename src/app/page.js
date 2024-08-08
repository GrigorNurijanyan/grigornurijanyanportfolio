import AboutMe from "@/pages/AboutMe/AboutMe";
import Contact from "@/pages/Contact/Contact";
import Footer from "@/pages/Footer/Footer";
import HireMe from "@/pages/HireMe/HireMe";
import HomePage from "@/pages/HomePage/HomePage";
import MyResume from "@/pages/MyResume/MyResume";
import Skills from "@/pages/Skills/Skills";
import Works from "@/pages/Works/Works";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HomePage />
      <AboutMe />
      <MyResume />
      <Works />
      <Skills />
      <HireMe />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
