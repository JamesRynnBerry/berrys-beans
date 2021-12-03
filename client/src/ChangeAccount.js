import React from 'react';
import { useState } from 'react'; 
import { useHistory } from 'react-router-dom';

const ChangeAccount = ({user, setUser}) => {

    let history = useHistory();
    const [changedEmail, setChangedEmail] = useState('');
    console.log(user, "USER IN CHANGEACCOUNT")

    function changeEmail() {
        fetch(`/users/${user.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Accept: 'application/json'
            },
            body: JSON.stringify( {email: changedEmail} )
            })
            .then(res => res.json())
            .then(data => console.log(data))
            history.push('/home')
    }

    function deleteUser(){
        fetch(`/users${user.id}`, {
            method: "DELETE"
        })
        fetch('/logout', {
            method: 'DELETE'
        })
        .then(r => {
            if (r.ok) {
                history.push('/')
            }
        });
    }

    const goBack = () => {
        history.push("/home")
    }

    return (
        <div className = "changeAccountBody">
            {console.log(user, user.email, user.name, "Change Account")}
            <div>
                <p>
                Username: {user.name}
                </p>
                <br/>
                <p>
                Email: {user.email}
                </p>
                <hr/>
            </div>
            <form onSubmit = {changeEmail} className = "changeAccountTextBody">
                <label>Change Email</label>
                <input
                type='text'
                placeholder='New Email'
                value = {changedEmail}
                onChange = {(e) => setChangedEmail(e.target.value)}
                required>
                </input>
                <button type="submit" className = "button">Submit</button>
                {/* <button onClick = {deleteUser} className = "button">Delete Account</button> */}
                <button onClick={goBack} className= "button">Return To Home</button>
            </form>
            <br/>

            
        </div>
    );
}

export default ChangeAccount; 