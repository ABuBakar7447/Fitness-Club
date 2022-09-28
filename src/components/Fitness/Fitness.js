import React, { useEffect, useState } from 'react';
import Instrument from '../Instruments/Instrument';
import UseageDetails from '../UsageDetails/UseageDetails';
import './Fitness.css'

const Fitness = () => {
    const [instruments, setInstruments] = useState([]);
    const [clickedData, setClickedData] = useState([])

    useEffect( () =>{
        fetch('instrumentData.json')
        .then(res => res.json())
        .then(data => setInstruments(data))
    }, [])

    const handleAddToUseDetails = (gymDetails) =>{
        // console.log(gymDetails)
        
        const newData = [...clickedData, gymDetails]
        setClickedData(newData);
    }
    return (
        <div className='fitness-container'>
            <div className='back-style'>
                <h1 className='text-style'>Fitness Club</h1>
                <h4 className='text-style'>Choose your instrument wisly</h4>
                <div className="gymDetails-container">
                    {
                    instruments.map(gymTools =><Instrument 
                        key= {gymTools.id}
                        gymDetails={gymTools}
                        handleAddToUseDetails={handleAddToUseDetails}
                        ></Instrument>) 
                    }
                </div>
            </div>
            
            <div className="usageTime-container">
                <UseageDetails clickData={clickedData}></UseageDetails>
            </div>
        </div>
    );
};

export default Fitness;