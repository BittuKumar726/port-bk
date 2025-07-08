import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Preloader from "./components/features/Preloader";
import NavBar from "./components/Navbar";
import ScrollToTop from "./components/features/ScrollToTop";
import Footer from "./components/Footer";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Resume from "./components/Resume/Resume";

import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import data from "./data/home.json";
import { calculateExperience } from "./utils/helper";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const introList = data?.introList;

  const experience = calculateExperience(data?.startOfYear);

  const skills = data?.skills;
  const frontendSkill = data?.frontendSkill;
  const stateManagement = data?.stateManagement;
  const tools = data?.tools;

  const introParts = [
    `${introList[0]} **${experience}** ${introList[1]} **${skills.join(", ")}**.`,
    `${introList[2]} **${frontendSkill.join(", ")}**,`,
    `${introList[3]} **${stateManagement.join(", ")}**.`,
    `${introList[4]} **${tools[0]}** and project management with **${tools[1]}**.`,
    introList[5],
  ];

  const intro = introParts.join(" ");

  const aboutIntroList = data?.aboutIntroList;
  const aboutIntro = [
    `${aboutIntroList[0]} **${experience}** ${aboutIntroList[1]} **${skills.join(", ")}**.`,
    `${aboutIntroList[2]} **${frontendSkill.join(", ")}, ${stateManagement.join(", ")}**, ${aboutIntroList[3]}`,
    `${aboutIntroList[4]} **${tools[0]}** ${aboutIntroList[5]} **${tools[1]}**.`
  ].join(" ")

  const updatedData = {
    ...data,
    intro: intro,
    aboutIntro: aboutIntro
  };



  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <NavBar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home data={updatedData} />} />
          <Route path="/port-bk" element={<Home data={updatedData} />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About data={updatedData}/>} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
