import React from "react";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const Navbar = () => (
    <ButtonGroup size="lg" className="mb-2">
        <Button>Trainingsplan</Button>
        <Button>Lexikon</Button>
        <Button>Profil</Button>
        <Button>Einstellungen</Button>
    </ButtonGroup>
);

export default Navbar;