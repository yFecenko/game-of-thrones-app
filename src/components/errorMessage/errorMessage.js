import React from "react";
import './errorMessage.css';
import img from './error.jpeg';

const ErrorMessage = () => {
    return (
        <>
            <img className='smth-goes-wrong' src={img} alt='error'></img>
            <span>Something goes wrong</span>
        
        </>
    )
}

export default ErrorMessage;