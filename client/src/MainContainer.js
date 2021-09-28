import React from 'react';
// import Filter from './Filter';
import BeanList from './BeanList';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';


const MainContainer = ({setUser, user}) => { 

    const [beans, setBeans] = useState([])

    let history = useHistory();

    useEffect(() => {
        fetch('/beans')
        .then(res => res.json())
        .then(data => setBeans(data))
    }, [])

    function sortItOut(data) {
        let beanStuff = data.sort((a, b) => b.likes - a.likes)
        setBeans(beanStuff)
    }

    function handleClick() {
        fetch("/logout", {
            method: 'DELETE' })
            .then(r => {
                if (r.ok) {
                    setUser(null)
                }
            });
            history.push('/')
        }

        function addBean() {
            if (true) {
            history.push('/new-bean')
            } else  {
            console.log("No Beans!")
            }
        }

        function changeEmail() {
            history.push('portfolio')
        }
    
        return (
            <div>
                {console.log(user)}
                <h1>Welcome {user.name}!</h1>
                <div>
                    <button onClick = {handleClick}>Logout</button>
                    <button onClick = {addBean}>Add a Bean</button>
                    <button onClick = {changeEmail}>Change Your Info</button>
                    <BeanList beans = {beans}/>
                </div>
            </div>
        )
}

export default MainContainer;

