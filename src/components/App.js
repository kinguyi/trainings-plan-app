import React from "react";
import Navbar from "./Navbar";
import BodyPartList from "./BodyPartList";
import Dashboard from "./Dashboard";
import ExerciseList from "./ExerciseList";
import TrainingView from "./TrainingView";

function App() {
  return (
    <div>
    <h1>Wähle eine Muskelgruppe:</h1>
    <TrainingView/>
    <Navbar/>
    </div>
    
  );
}

export default App;
