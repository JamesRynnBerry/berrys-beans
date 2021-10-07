import React from 'react';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const NewBean = ({user}) => {

    const [newName, setNewName] = useState ('');
    const [newRoast, setNewRoast] = useState ('');
    const [newPrice, setNewPrice] = useState ('');
    const [newFlavor, setNewFlavor] = useState ('');
    const [newOrigin, setNewOrigin] = useState ('');
    const [newProcess, setNewProcess] = useState ('');
    const [newProducer, setNewProducer] = useState ('');


    let history = useHistory();

    function handleSubmit(e) {
        e.preventDefault();
        const newBean = {
            name: newName,
            roast: newRoast,
            price: parseInt(newPrice),
            flavor: newFlavor, 
            origin: newOrigin, 
            process: newProcess,
            producer: newProducer,
            user_id: user.id
        }

        fetch('/beans', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newBean)
        })
        history.push('/home')
    }

    const goBack = () => {
        history.push("/home")
    }

    return(
        <div className ="newBeanBody" >
            <h3>Add a New Bean:</h3>
            <form onSubmit={handleSubmit}>
                <label>Bean Name</label>
                <input 
                type="text"
                placeholder="Bean Name"
                value = {newName}
                onChange = {(e) => setNewName(e.target.value)}
                required>
                </input>
                <br/>

                <label>Type of Roast</label>
                <input 
                type="text"
                placeholder="Bean Roast"
                value = {newRoast}
                onChange = {(e) => setNewRoast(e.target.value)}
                required>
                </input>
                <br/>

                <label>Bean Price</label>
                <input 
                type="text"
                placeholder="Bean price"
                value = {newPrice}
                onChange = {(e) => setNewPrice(e.target.value)}
                required>
                </input>
                <br/>

                <label>Bean Flavor</label>
                <input 
                type="text"
                placeholder="Bean flavor"
                value = {newFlavor}
                onChange = {(e) => setNewFlavor(e.target.value)}
                required>
                </input>
                <br/>

                <label>Bean Origin</label>
                <input 
                type="text"
                placeholder="Bean origin"
                value = {newOrigin}
                onChange = {(e) => setNewOrigin(e.target.value)}
                required>
                </input>
                <br/>

                <label>Bean Process</label>
                <input 
                type="text"
                placeholder="Bean process"
                value = {newProcess}
                onChange = {(e) => setNewProcess(e.target.value)}
                required>
                </input>
                <br/>

                <label>Bean Producer</label>
                <input 
                type="text"
                placeholder="Bean producer"
                value = {newProducer}
                onChange = {(e) => setNewProducer(e.target.value)}>
                </input>
                <br/>

                <button type = "Submit" className = "button">Submit</button>
                <br/>
                <button onClick={goBack} className= "button">Return To Home</button>
            </form>
        </div>
    )
}

export default NewBean;