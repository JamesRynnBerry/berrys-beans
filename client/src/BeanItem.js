import React from 'react'
import {useHistory} from 'react-router-dom'
import BeanContainer from './BeanContainer'

function BeanItem({bean}) {
    let history = useHistory ()

    const handleClick = () => {
        history.push(`/singlebean/${bean.id}`)
    }

    return(
        <div className='bean row'>
            <BeanContainer bean={bean}/> 
            <button onClick={handleClick} className= "button">
                Find a Store!
            </button>
        </div>
    )
}

export default BeanItem;