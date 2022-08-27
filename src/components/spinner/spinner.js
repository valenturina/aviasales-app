import React from "react";
import { SpinnerCircularFixed } from 'spinners-react';
import './spinner.scss'

const Spinner = () => {
    return (
        <div className='spinner'>
            <SpinnerCircularFixed color='#2196F3' secondaryColor='#A0B0B9'/>
        </div>
    )
}

export default Spinner;