import {useHistory, useParams} from 'react-router-dom';
import {useEffect, useState} from 'react'
import BeanItem from './BeanItem'


function SingleBean({bean}) {

    console.log(bean, "butts")
    let history = useHistory()

    const keptBean = history.location.state

    const goBack = () => {
        history.push("/home")
    }

    return (
        <div>
            <BeanItem/>
            {/* <p>Name: {bean.name}</p>
            <p>Roast: {bean.roast} </p>
            <p>Flavor: {bean.flavor} </p>
            <p>Origin: {bean.origin} </p>
            <p>Process: {bean.process} </p>
            <p>Producer: {bean.producer} </p>
            <p>Price: {bean.price} </p> */}
            {/* <button onClick={()=>click(beans)}> Save This Bean </button> */}
            <button onClick={goBack}>Return To Home</button>
        </div>
    )
}

export default SingleBean