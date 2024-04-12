// import React from 'react'

import { useState } from "react";
import NavBar from "./Components/NavBar/NavBar";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import IntroPage from "./Pages/IntroPage";
import ContactPage from "./Pages/ContactPage"

const App = () => {
  const [theme, setTheme] = useState("light");
  return (
    <div className={`container ${theme}`}>
      <NavBar theme={theme} setTheme={setTheme} />
      <HomePage theme={theme} setTheme={setTheme} />
      <AboutPage theme={theme} setTheme={setTheme} />
      <IntroPage theme={theme} setTheme={setTheme} />
      <ContactPage theme={theme} setTheme={setTheme} />
    </div>
  );
};

export default App;
