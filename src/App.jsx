import { useState } from "react";

import "./App.css";
import Header from "./Components/Header";
import Content from "./Components/Content";
import Cards from "./Components/Cards";

function App() {
  return (
    <>
      <Header />
      <Content />
      <Cards />
    </>
  );
}

export default App;
