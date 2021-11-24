import React from "react";
import Button from 'react-bootstrap/Button';

const Registration = () => (
    <div>
        <img src="" alt="" />

        <form>
            <label for="fname">Vorname</label>
            <input type="text" placeholder="Vorname" />

            <label for="fname">Nachname</label>
            <input type="text" placeholder="Nachname" />

            <label for="fname">E-Mail</label>
            <input type="text" placeholder="E-Mail" />

            <label for="fname">Telefonnummer</label>
            <input type="text" placeholder="Telefonnummer" />

            <label for="fname">Passwort</label>
            <input type="text" placeholder="Passwort" />

            <label for="fname">Passwort wiederholen</label>
            <input type="text" placeholder="Passwort wiederholen" />

            <Button type="submit">Registrieren</Button>
        </form>
    </div>
);

export default Registration;