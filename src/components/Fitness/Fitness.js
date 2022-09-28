import React, { useEffect, useState } from 'react';
import Instrument from '../Instruments/Instrument';
import './Fitness.css'

const Fitness = () => {
    const [instruments, setInstruments] = useState([]);

    useEffect( () =>{
        fetch('instrumentData.json')
        .then(res => res.json())
        .then(data => setInstruments(data))
    }, [])
    return (
        <div className='fitness-container'>
            <div className="gymDetails-container">
                {
                   instruments.map(gymTools =><Instrument key= {gymTools.id}
                   gymDetails={gymTools}></Instrument>) 
                }
            </div>
            <div className="usageTime-conataine">
                <h1>
                    bye
                </h1>
            </div>
        </div>
    );
};

export default Fitness;