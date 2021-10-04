import {useHistory, useParams} from 'react-router-dom';
import {useEffect, useState} from 'react'
import BeanItem from './BeanItem'


function SingleBean({beans}) {

    const {id} = useParams()
    console.log(id)
    console.log(beans, "butts")
    let history = useHistory()

    let beanFilter = beans.filter(bean => bean.id == id)[0]
    
    console.log(beanFilter)

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
            {/* <button onClick={()=>click(beans)}> Save This Bean </button> */}
            <button onClick={goBack}>Return To Home</button>
        </div>
    )
}

export default SingleBean