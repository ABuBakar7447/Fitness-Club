import React from 'react';
import './Instrument.css'


const Instrument = (props) => {
    console.log(props.gymDetails)
    const{image, name, details, time} = props.gymDetails
    return (
        <div className='gymDetails'>
            <img src={image} alt="" ></img>
            <p className='different-color'>{name}</p>
            <p>{details}</p>
            <p>Time:<span className='different-color'>{time}</span>s</p>

            <button className='gymTool-btn'>
                <p>Add Instrument</p>
            </button>
        </div>
    );
};

export default Instrument;