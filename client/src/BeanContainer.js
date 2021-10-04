import React , { useState, useEffect } from 'react';
import BeanItem from './BeanItem';

const BeanContainer = ({beans}) => {


    return (
        <div>
            {beans.map(bean => (
                <BeanItem key={bean.id} bean={bean} />
            ))}
        </div>
    )
}

export default BeanContainer;