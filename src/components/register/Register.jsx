import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

const Register = () => {
    const navigate = useNavigate(); // ใช้สำหรับนำทางปุ่มกลับ

    const [formState, setFormState] = useState({
        id: '',
        firstName: '',
        lastName: '',
        password: ''
    });

    const onClickRegister = () => {
        Axios.post("http://localhost:8085/api/v1/employee/register", formState).then(response=>{
            alert(JSON.stringify(response.data))
        })
    };

    const handleLoginClick = () => {
        navigate('/login'); // นำทางไปหน้า login
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState({
            ...formState,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onClickRegister(); // เรียกใช้ฟังก์ชันลงทะเบียนเมื่อกด submit
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Register</h1>
                <label htmlFor="idname">ID:</label><br />
                <input 
                    type="text" 
                    id="idname" 
                    name="id" 
                    value={formState.id} 
                    onChange={handleChange} 
                /><br />
                <label htmlFor="fname">First name:</label><br />
                <input 
                    type="text" 
                    id="fname" 
                    name="firstName" 
                    value={formState.firstName} 
                    onChange={handleChange} 
                /><br />
                <label htmlFor="lname">Last name:</label><br />
                <input 
                    type="text" 
                    id="lname" 
                    name="lastName" 
                    value={formState.lastName} 
                    onChange={handleChange} 
                /><br />
                <label htmlFor="pname">Password:</label><br />
                <input 
                    type="password" 
                    id="pname" 
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
