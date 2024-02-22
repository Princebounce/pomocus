import React from "react";
import Nav from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import About from "../About/About";
import Bot from "../Bot/Bot";
import Contact from "../Contact/Contact";
import Pomodoro from "../Pomodoro/Pomodoro";
import Timer from "../Timer/Timer";

const Home = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Nav />
      <Bot />
      <Pomodoro />
      <Timer />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
