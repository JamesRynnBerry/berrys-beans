import React from 'react';
// import Filter from './Filter';
import BeanList from './BeanList';
import { useState, useEffect, Link } from 'react';
import { useHistory } from 'react-router-dom';
import BeanContainer from './BeanContainer';
import BeanItem from './BeanItem';
import coffeeStain from './coffeeStain.png'

const MainContainer = ({setUser, user, setBeans, beans}) => { 

    const [searchTerm, setSearchTerm] = useState('')

    let history = useHistory();

    function sortItOut(data) {
        let beanStuff = data.sort((a, b) => b.likes - a.likes)
        setBeans(beanStuff)
    }

    useEffect(() => {
        setUser(user)
        console.log( "1",user)
    })

    // function beanPusher (){
    //     history.push("/singlebean/${bean.id}", bean)
    // }

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
        // console.log(bean, 'beancheck')
        return (
            <div className = "MainContainerContainer">
                <div className = "Welcome">
                <h1>Welcome!</h1>
                </div>
                <div className = "navBar">
                    <button onClick = {handleClick}>Logout</button>
                    <button onClick = {addBean}>Add a Bean</button>
                    <button onClick = {changeEmail}>Change Your Info</button>
                    <br/>
                </div>
                
                <div className = "uiContainer">
                    <div className = "searchBar">
                    <input 
                    className = "searchBarInput"
                    type="text" 
                    placeholder="Search..." 
                    onChange={event => {setSearchTerm(event.target.value)}}/>
                    </div>
                    <div className = "beanCard">
                    {beans.filter((val) => {
                        if(searchTerm == "") {
                            return val
                        } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return val
                        }
                    }).map((bean, key) => {
                        return <div key = {key} className = "beanContainer">
                            <img src={coffeeStain} alt="coffee stain"/>
                            <BeanItem bean={bean} key={bean.id} className = "beanItem"/>
                            {/* <button onClick={(e) => history.push(`/singlebean/`)}>Learn More!</button> */}
                            </div>
                    })}
                    </div>
                </div>
            </div>
        )
}

export default MainContainer;

