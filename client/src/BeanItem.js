import React from 'react'
import {useHistory} from 'react-router-dom'

function BeanItem({bean}) {
    let history = useHistory ()

    const handleClick = () => {
        console.log(bean.id)
        // history.push(`/singlebean/${bean.id}`)
    }

    return(
        <div className='bean row'>
            <div>
            <p>Name: {bean.name}</p>
            <p>Roast: {bean.roast} </p>
            <p>Flavor: {bean.flavor} </p>
            <p>Origin: {bean.origin} </p>
            <p>Process: {bean.process} </p>
            <p>Producer: {bean.producer} </p>
            <p>Price: {bean.price} </p>
            </div>
            <button onClick={handleClick}>
                Learn More!
            </button>
        </div>
    )
}

export default BeanItem;