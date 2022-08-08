
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from 'react';
import './loginStyle.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export const Login = () => {

    let navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const userobj = {email : event.target.email.value, password: event.target.password.value};
        axios.post("http://localhost:8080/login", userobj)
        .then(response => {
            if(response.data == '')
            {
                console.log("Invalid Credentials");
            }
            else {
                localStorage.setItem('user', JSON.stringify(response.data));
                navigate('dashboard/securities');
                console.log(response.data);
            }
        });
    }
    
    return (
        <div className="container">
            <form className="form-1" onSubmit={handleSubmit}>
                <h1>Login</h1>
                <label>Email</label>
                <input type="email" value={username} onChange={handleUsernameChange} name="email" id="email" required />
                <label>Password</label>
                <input type="password" value={password} onChange={handlePasswordChange}  name="password" id="password" required />
                <input type="submit"></input>            
            </form>
        </div>
    );
}

export default Login;