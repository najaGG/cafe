import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import WebSocketComponent from '../WebSocketComponent';
const Register = () => {
    const navigate = useNavigate();

    const [formState, setFormState] = useState({
        id: '',
        firstName: '',  
        lastName: '',   
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState({
            ...formState,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        Axios.post("http://localhost:8085/api/v1/employee/register", formState)
            .then(response => {
                alert(JSON.stringify(response.data));
            })
            .catch(error => {
                console.error("Error during registration:", error);
                alert("Registration failed. Please try again.");
            });
    };

    const handleLoginClick = () => {
        navigate('/login');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Register</h1>

                <WebSocketComponent onDataReceived={handleWebSocketData} />
                
                <label htmlFor="id">ID:</label><br />
                <input 
                    type="text" 
                    id="id" 
                    name="id"
                    value={formState.id} 
                    onChange={handleChange} 
                    readOnly // You might want to make this field read-only
                /><br />
                <label htmlFor="lastname">Last name:</label><br />
                <input 
                    type="text" 
                    id="lastname" 
                    name="lastName" 
                    value={formState.lastName} 
                    onChange={handleChange} 
                /><br />

                <label htmlFor="password">Password:</label><br />
                <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    value={formState.password} 
                    onChange={handleChange} 
                /><br />
                <button type="submit">Register</button>
                <br />
                <button type="button" className="btn btn-light" onClick={handleLoginClick}>
                    Go to login
                </button>
            </form>
        </div>
    );
};

export default Register;
