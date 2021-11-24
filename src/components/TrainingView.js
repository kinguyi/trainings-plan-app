import React from "react";
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';

const TrainingView = () => 
(

    <div>
        <div>
            <p>Zurück</p>
            <p>Überspringen</p>
        </div>
        <div>
            <ProgressBar now={45} active="true"/>
            <p>0/0</p>
        </div>
       

        <h1>Deadlift</h1>
        <img src="../../img/barbell.jpeg" alt=""/>

        <div className="Satz">
            <p>Satz 1</p>
            <p>Gewicht</p>{/* Input field Weight*/}
            <p>WH</p>{/* Input field Reps */}
        </div>
        <div className="Satz">
            <p>Satz 2</p>
            <p>Gewicht</p>{/* Input field Weight*/}
            <p>WH</p>{/* Input field Reps */}
        </div>
        <div className="Satz">
            <p>Satz 3</p>
            <p>Gewicht</p>{/* Input field Weight*/}
            <p>WH</p>{/* Input field Reps */}
        </div>

        <Button>Weiter</Button>
        <a href="/home">Training beenden</a>

    </div>

);


export default TrainingView;