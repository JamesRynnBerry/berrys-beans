import React from 'react';
import { useState } from 'react';
import { useHistory } from "react-router-dom"


const Login = ({setUser}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const [newEmail, setNewEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [newName, setNewName] = useState('');

    let history = useHistory()

    function signUp(e) {
        e.preventDefault();

        const signup = {
            name: newName,
            email: newEmail,
            password: newPassword,
        }

        fetch('/signup', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(signup)
    })
    .then((r) => {
        console.log(r)
        if (r.ok) {
        r.json().then(
            (user) => setUser(user));
            history.push('/home')
        }
    });

    }
    
    function logIn(e) {
        e.preventDefault();

        // const logup = {
        //     name: name,
        //     email: email,
        //     password: password,
        // }

        fetch('/login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, email, password})
        })
        .then((r) => 
        r.json()) 
        .then((user) => { 
            if (user) {
            setUser(user)
            history.push('/home')
            }
        });
        }

    return (
        <div className="loginBody">
            <h1>Berry's Beans</h1>
            <div className= "formBody">
            <form onSubmit = {logIn}>
                <h3>Login</h3>
                <label>
                    <p>Name:</p>
                    <input
                    value = {name}
                    onChange ={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Enter Your Name"
                    required
                    />
                </label>
                <label>
                    <p>E-mail:</p>
                    <input 
                    value = {email}
                    onChange = {(e) => setEmail(e.target.value)}
                    type="text" 
                    placeholder="Enter Your E-mail"
                    required
                    />
                </label>
                <label>
                    <p>Password:</p>
                    <input 

                    value = {password}
                    onChange = {(e) => setPassword(e.target.value)}
                    type="password" 
                    placeholder="Enter Your Password" 
                    required
                    />
                </label>
                <div>
                    <button type="submit" className="button">Login</button>
                </div>
            </form>
            {/* </div>
            <div> */}
            <form onSubmit = {signUp}>
                <h3>Become a user!</h3>
                <label>
                    <p>Your Name:</p>
                    <input
                    value = {newName}
                    onChange ={(e) => setNewName(e.target.value)}
                    type="text"
                    placeholder="New Name..."
                    required
                    />
                </label>
                <label>
                    <p>E-mail:</p>
                    <input 
                    value = {newEmail}
                    onChange = {(e) => setNewEmail(e.target.value)}
                    type="text" 
                    placeholder="New E-mail..."
                    required
                    />
                </label>
                <label>
                    <p>Password:</p>
                    <input 

                    value = {newPassword}
                    onChange = {(e) => setNewPassword(e.target.value)}
                    type="password" 
                    placeholder="New Password..." 
                    required
                    />
                </label>
                <div>
                    <button type="submit" className= "button">Signup</button>
                </div>
            </form>
            </div>
        </div>
    );
}

export default Login;