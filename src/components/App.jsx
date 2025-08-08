import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import "./index.css";

export default function App() {
  return (
    <>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
}
