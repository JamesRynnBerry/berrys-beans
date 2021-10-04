import React , { useState, useEffect } from 'react';


const BeanContainer = ({bean}) => {


    return (
        <div>
            <p>Name: {bean.name}</p>
            <p>Roast: {bean.roast} </p>
            <p>Flavor: {bean.flavor} </p>
            <p>Origin: {bean.origin} </p>
            <p>Process: {bean.process} </p>
            <p>Producer: {bean.producer} </p>
            <p>Price: {bean.price} </p>
            </div>
    )
}

export default BeanContainer;