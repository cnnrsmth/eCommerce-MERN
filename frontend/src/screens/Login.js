import React, { useState } from 'react';
import { Link , useNavigate } from 'react-router-dom';
import './Login.css'

function Login() {

    const navigate = useNavigate();
    
    const [confirmUser, setConfirmUser] = useState({
        "email": "",
        "password": ""
    })

    const handleConfirmUser = async (e) => {
        e.preventDefault();
        console.log(confirmUser)
            try {
                const response = await fetch('https://ecommerce-process.onrender.com/api/auth/login', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(confirmUser),
                })
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                localStorage.setItem("token", data.token)
                navigate("/cart")
            } catch (e) {
                console.error(e);
            }
    };

    const handleEmailChange = (e) => {
        setConfirmUser({ ...confirmUser, email: e.target.value });
    };
    
    const handlePasswordChange = (e) => {
        setConfirmUser({ ...confirmUser, password: e.target.value });
    };

    return (
    <div className="login__main">
        <main className="box">
            <h2>Login</h2>
                <form onSubmit={handleConfirmUser}>
                    <div className="inputBox">
                        <label htmlFor="userName">Email</label>
                        <input 
                            type="email"
                            value={confirmUser.email}
                            onChange={handleEmailChange}
                            placeholder="Type email here..." 
                        />
                    </div>
                    <div className="inputBox">
                        <label htmlFor="userPassword">Password</label>
                        <input 
                            type="password" 
                            value={confirmUser.password}
                            onChange={handlePasswordChange} 
                            placeholder="Type password here..."
                        />
                    </div>
                    <div>
                        <button className="login__button" type="submit" style={{float: 'left'}}>Submit</button>
                        <div className="register__link">
                            <p>Don't have an account yet? </p>
                            <Link className="button" to="/register" style={{float: 'left'}}>
                                Sign up
                            </Link>
                        </div>
                    </div>
                </form>
        </main>
    </div>
    )
}

export default Login