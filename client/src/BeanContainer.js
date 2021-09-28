import React , { useState, useEffect } from 'react';

const BeanContainer = ({bean}) => {

    const [newQuantity, setNewQuantity] = useState();

    return (
        <div className='individual' id="Bean Container">
            <img className= 'image' src={bean.image_url} alt=''/>
            <p>Name: {bean.name}</p>
            <p>Roast: {bean.roast}</p>
            <p>Price: {bean.price}</p>
            <p>Flavor: {bean.flavor}</p>
            <p>Origin: {bean.origin}</p>
            <p>Price: {bean.price}</p>
            <p>Producer: {bean.producer}</p>
        </div>
    )
}

export default BeanContainer;