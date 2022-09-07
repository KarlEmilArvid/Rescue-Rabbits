import { useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Main from "./components/Main/Main";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
