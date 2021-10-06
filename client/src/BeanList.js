import React from 'react';
import BeanContainer from './BeanContainer'


const BeanList = ({beans}) => {
    return (
        <div>
            <ul id="beanlist">
                {beans.map(bean => (
                    <BeanContainer 
                        key = {bean.id}
                        bean = {bean}
                    />
                ))}
            </ul>
        </div>

    )
}

export default BeanList