import React, { useState } from 'react'
import './Register.css'

function Register() {

    const [newUser, setNewUser] = useState({
        "email": "",
        "password": "",
        "password_confirmation": "",
        "admin": false
    })

    const handleAddUser = async (e) => {
        e.preventDefault();
    
        if (!newUser.email || !newUser.password || !newUser.password_confirmation) {
            alert("Please fill in all fields");
            return;
        }
    
        if (newUser.password !== newUser.password_confirmation) {
            alert("Password confirmation incorrect");
            return;
        }
    
        try {
            const response = await fetch('http://localhost:5000/api/auth/register', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newUser),
            });
    
            if (!response.ok) {
                const errorData = await response.json();
                alert(errorData.message);
                return;
            }
    
            window.location = "/login"
        } catch (error) {
            console.error(error);
            alert("An error occurred while registering");
        }
    };

    const handleEmailChange = (e) => {
        setNewUser({ ...newUser, email: e.target.value });
    };
    
    const handlePasswordChange = (e) => {
        setNewUser({ ...newUser, password: e.target.value });
    };

    const handlePasswordConfirmationChange = (e) => {
        setNewUser({ ...newUser, password_confirmation: e.target.value });
    };

    const handleAdminChange = (e) => {
        setNewUser({ ...newUser, admin: e.target.checked })
    }

  return (
    <div className="register__main">
        <main className="box">
            <h2>Register</h2>
                <form onSubmit={handleAddUser}>
                    <div className="inputBox">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email"
                            value={newUser.email}
                            onChange={handleEmailChange}
                            placeholder="Type email here..." 
                        />
                    </div>
                    <div className="inputBox">
                        <label htmlFor="userPassword">Password</label>
                        <input 
                            type="password" 
                            value={newUser.password} 
                            onChange={handlePasswordChange}
                            placeholder="Type password here..."
                        />
                    </div>
                    <div className="inputBox">
                        <label htmlFor="userPassword">Password</label>
                        <input 
                            type="password" 
                            value={newUser.password_confirmation} 
                            onChange={handlePasswordConfirmationChange}
                            placeholder="Confirm password..."
                        />
                    </div>
                    <div className="checkbox-container">
                        <input 
                            type="checkbox" 
                            id="isAdmin" 
                            name="isAdmin" 
                            onChange={handleAdminChange} 
                            checked={newUser.admin}
                        />
                        <label htmlFor="isAdmin">Admin User?</label>
                    </div>
                    <div>
                        <button className="register__button" type="submit" style={{float: 'left'}}>Submit</button>
                    </div>
                </form>
        </main>
    </div>
  )
}

export default Register