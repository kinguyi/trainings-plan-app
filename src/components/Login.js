import React from "react";
import Button from 'react-bootstrap/Button';



const Login = () => (
    <div>
        <img src="" alt="" />
        <h1>Willkommen</h1>
        <form>
            <label for="fname">E-Mail</label>
            <input type="text" placeholder="E-Mail" />
            <label for="fname">Passwort</label>
            <input type="text" placeholder="Passwort" />
            <Button type="submit">Anmelden</Button>
        </form>
        <p>Noch kein Mitglied?<a href="#">Registrieren</a></p>
        
    </div>
)

export default Login;