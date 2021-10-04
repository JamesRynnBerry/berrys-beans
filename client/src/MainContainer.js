import React from 'react';
// import Filter from './Filter';
import BeanList from './BeanList';
import { useState, useEffect, Link } from 'react';
import { useHistory } from 'react-router-dom';
import BeanContainer from './BeanContainer';
import BeanItem from './BeanItem';

const MainContainer = ({setUser, user, setBeans, beans}) => { 

    const [searchTerm, setSearchTerm] = useState('')

    let history = useHistory();

    function sortItOut(data) {
        let beanStuff = data.sort((a, b) => b.likes - a.likes)
        setBeans(beanStuff)
    }
    console.log(beans, "test")

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
            <div>
                {console.log(user)}
                <h1>Welcome {user.name}!</h1>
                
                <div>
                    <button onClick = {handleClick}>Logout</button>
                    <button onClick = {addBean}>Add a Bean</button>
                    <button onClick = {changeEmail}>Change Your Info</button>
                    <br/>
                    <input 
                    type="text" 
                    placeholder="Search..." 
                    onChange={event => {setSearchTerm(event.target.value)}}/>
                    {beans.filter((val) => {
                        if(searchTerm == "") {
                            return val
                        } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return val
                        }
                    }).map((bean) => {
                        return <div className = "bean container"> 
                            <BeanItem bean={bean} key={bean.id}/>
                            {console.log(bean, "t")}
                            {/* <button onClick={(e) => history.push(`/singlebean/`)}>Learn More!</button> */}
                            </div>
                    })}
                    {/* <BeanList beans = {beans}/> */}

                </div>
            </div>
        )
}

export default MainContainer;

