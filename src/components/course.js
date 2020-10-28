import React from "react"
import Course from "./components/course"
import "./App.css"
import witCrest from "./wit_crest.png"

const App = () => {
   // Use your module names here.
  const modules = [
    {
      name: "Enterprise Systems Architecture",
      noLectures: 48,
      noPracticals: 12
    },
    {
      name: "Business Analytics",
      noLectures: 24,
      noPracticals: 36
    }
  ];

  const name = "Software System Parcise - Modules table" // Replace

  return (
    <>
      <header className="App-header">
        <img className="center" src={witCrest} alt="logo" />
      </header>
      <div className="course">
        <Course title={name} modules={modules} />
      </div>
    </>
  );
};

export default App