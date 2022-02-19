import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Profile from "../components/Profile";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <Profile />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
