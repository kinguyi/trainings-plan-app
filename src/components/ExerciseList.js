import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const ExerciseList = () => (


    <div>
        <div>
            {/*Drop Down Menu*/}
            <h1>Msukelgruppe</h1>
            {/*Search option*/ }
        </div>
        <ul>
            {/* Übungen */}
            <li>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </li>
        </ul>
    </div>
)

export default ExerciseList;