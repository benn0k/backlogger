import { useState, useEffect } from "react";
import "./App.css";
import CardWrapper from "./components/Card/_CardWrapper";
import Header from "./components/Header/_Header";

function App() {
  return (
    <>
      <div id="page-wrapper">
        <Header></Header>
        <div id="body-wrapper" className=" px-8">
          <CardWrapper></CardWrapper>
        </div>
      </div>
    </>
  );
}

export default App;
