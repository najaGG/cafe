import React, { useState } from 'react';
import './Register.css'
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import WebSocketComponent from '../WebSocketComponent';

const Register = () => {
    const navigate = useNavigate();

    const [formState, setFormState] = useState({
        rfid: '',
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

    const handleWebSocketData = (data) => {
        setFormState((prevState) => ({
            ...prevState,
            id: data 
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        Axios.post("http://localhost:8085/api/v1/employee/register", formState)
            .then(response => {
                alert(JSON.stringify(response.data));
            })
            .catch(error => {
                console.error("Error during registration:", error);
                alert("Register fail try again");
            });
    };

    const handleLoginClick = () => {
        navigate('/login');
    };

    return (
        <div>
            <div class="main">
            <form onSubmit={handleSubmit}>
                <h1>ลงทะเบียน</h1>

                <WebSocketComponent onDataReceived={handleWebSocketData} />
                
                <label htmlFor="rfid">RFID:</label><br />
                <input 
                    type="text" 
                    id="rfid" 
                    name="rfid"
                    value={formState.id} 
                    onChange={handleChange} 
                    readOnly 
                /><br />

                <label htmlFor="firstname">ชื่อ:</label><br />
                <input 
                    type="text" 
                    id="firstname" 
                    name="firstName"
                    value={formState.firstName} 
                    onChange={handleChange} 
                /><br />
                
                <label htmlFor="lastname">นามสกุล:</label><br />
                <input 
                    type="text" 
                    id="lastname" 
                    name="lastName" 
                    value={formState.lastName} 
                    onChange={handleChange} 
                /><br />

                <label htmlFor="password">รหัสผ่าน:</label><br />
                <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    value={formState.password} 
                    onChange={handleChange} 
                /><br />
                
                <button type="submit">ลงทะเบียน</button>
                <br />
                <button type="button" className="btn btn-light" onClick={handleLoginClick}>
                    ไปที่เข้าสู่ระบบ
                </button>
            </form>
            </div>
        </div>
    );
};

export default Register;
