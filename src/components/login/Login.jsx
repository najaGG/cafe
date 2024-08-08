// src/components/Login.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const handleRegisterClick = () => {
        navigate('/register'); // เปลี่ยนเส้นทางไปยังหน้า register
    };

    return (
        <div>
            <h1>Login Page</h1>
            <form>
                <div>
                    <label>Email:</label>
                    <input type="email" required />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" required />
                </div>
                <button type="submit">Login</button>
                <br />
                <button type="button" className="btn btn-light" onClick={handleRegisterClick}>
                    Register
                </button>
            </form>
        </div>
    );
};

export default Login;
