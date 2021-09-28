import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const ChangeUser = ({user}) => {
    
    const [changedEmail, setChangedEmail] = useState('');

    let history = useHistory();

    function changeEmail() {
        fetch(`/users/${user.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Accept: 'application/json'
            },
            body: JSON.stringify({
                email: changedEmail
            })
        })
        .then(res => res.json())
        .then(data => console.log(data))
        history.push('/home')
    }
    return (
        <div>
            <div>
                Username: {user.name}
                <br/>
                Email: {user.email}
            </div>
            <form onSubmit = {changeEmail}>
                <label>Change Email</label>
                <input 
                type='text'
                placeholder='new email'
                value = {changedEmail}
                onChange = {(e) => setChangedEmail(e.target.value)}
                required
                ></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default ChangeUser;