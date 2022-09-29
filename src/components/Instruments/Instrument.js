import React from 'react';
import './Instrument.css'


const Instrument = (props) => {
    
    const{gymDetails, handleAddToUseDetails} = props
    const{image, name, details, time} = gymDetails
    return (
        <div className='gymDetails'>
            <img src={image} alt="" ></img>
            <p><span className='different-color'>{name}</span></p>
            <p>{details}</p>
            <p>Time:<span className='different-color'>{time}</span>min</p>

            <button onClick={() =>handleAddToUseDetails(gymDetails)} className='gymTool-btn'>
                <p>Add Instrument</p>
            </button>
        </div>
    );
};

export default Instrument;