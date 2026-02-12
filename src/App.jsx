import { useState } from "react";
import Galaxy from "./components/Galaxy";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import "./App.css";

export default function App() {

  const [page, setPage] = useState("home");

  return (
    <div className="app">

      <Galaxy />

      <Navbar setPage={setPage} />

      <div className="screen">

        {page === "home" && <Hero />}
        {page === "projects" && <Projects />}
        {page === "resume" && <Resume />}
        {page === "contact" && <Contact />}

      </div>

    </div>
  );
}
