import {useHistory, useParams} from 'react-router-dom';
import {useEffect, useState} from 'react'
import BeanItem from './BeanItem'
// import CoffeeMap from './CoffeeMap'
import BeanMap from './BeanMap'

require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);


function SingleBean({beans}) {

    const {id} = useParams()

    let history = useHistory()

    let beanFilter = beans.filter(bean => bean.id == id)[0]
    
    console.log(beanFilter, "#1")

    const keptBean = history.location.state

    const goBack = () => {
        history.push("/home")
    }

    return (
        <div>
            {/* <BeanItem beanFilter={beanFilter}/> */}
            <p>Name: {beanFilter.name}</p>
            <p>Roast: {beanFilter.roast} </p>
            <p>Flavor: {beanFilter.flavor} </p>
            <p>Origin: {beanFilter.origin} </p>
            <p>Process: {beanFilter.process} </p>
            <p>Producer: {beanFilter.producer} </p>
            <p>Price: {beanFilter.price} </p>
            <BeanMap/>
            {/* <button onClick={()=>click(beans)}> Save This Bean </button> */}
            <button onClick={goBack}>Return To Home</button>
        </div>
    )
}

export default SingleBean