import React from 'react';
import './Service.css'

const Service = ({service}) => {
    const {name, price, description, img} =service
    return (
        <div className='service-section'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: $ {price}</p>
            <small>{description}</small><br />
            <button className='btn-color'>Book: {name}</button>
        </div>
    );
};

export default Service;