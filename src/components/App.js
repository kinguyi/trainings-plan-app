import React from "react";
import Navbar from "./Navbar";
import BodyPartList from "./BodyPartList";
import Dashboard from "./Dashboard";
import ExerciseList from "./ExerciseList";
import TrainingView from "./TrainingView";
import Login from "./Login";
import Registration from "./Registration";

function App() {
  return (
    <div>
    <TrainingView/>
    <Navbar/>
    </div>
    
  );
}

export default App;
