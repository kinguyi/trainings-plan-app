import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const ExerciseList = () => (


    <div>
        <div>
            {/*Drop Down Menu*/}
            <h1>Beine</h1>
            {/*Search option*/ }
        </div>
        <ul>
            {/* Übungen */}
            <li>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Deadlift</Card.Title>
                        <Card.Text>
                        Trainierte Mukselgruppen:<br/>
                        Equipment:
                        </Card.Text>
                        <Button variant="primary">Zu Trainingsplan hinzufügen</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Squats</Card.Title>
                        <Card.Text>
                        Trainierte Mukselgruppen:<br/>
                        Equipment:
                        </Card.Text>
                        <Button variant="primary">Zu Trainingsplan hinzufügen</Button>
                    </Card.Body>
                </Card>
            </li>
        </ul>
    </div>
)

export default ExerciseList;