import {useHistory, useParams} from 'react-router-dom';
import {useEffect, useState} from 'react'
import BeanItem from './BeanItem'
// import CoffeeMap from './CoffeeMap'
import BeanMap from './BeanMap'

require('react-dom');

function SingleBean({beans, user}) {
    const [bean, setBean] = useState("")
    const {id} = useParams()

    useEffect(() => {
        fetch(`/beans/${id}`)
        .then(res => res.json())
        .then(data => setBean(data))
    }, [])

    let history = useHistory()

    console.log(beans, bean)

    // let beanFilter = beans.filter(bean => bean.id == id)[0]

    const keptBean = history.location.state

    const goBack = () => {
        history.push("/home")
    }

    return (
        <div className = "SingleBean">
            {/* <BeanItem beanFilter={beanFilter}/> */}
            <h3>Name: {bean.name}</h3>
            <p>Roast: {bean.roast} </p>
            <p>Flavor: {bean.flavor} </p>
            <p>Origin: {bean.origin} </p>
            <p>Process: {bean.process} </p>
            <p>Producer: {bean.producer} </p>
            <p>Price: {bean.price} </p>
            <BeanMap/>
            {/* <button onClick={()=>click(beans)}> Save This Bean </button> */}
            <button onClick={goBack} className= "button">Return To Home</button>
        </div>
    )
}

export default SingleBean