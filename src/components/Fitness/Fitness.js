import React, { useEffect, useState } from 'react';
import Instrument from '../Instruments/Instrument';
import { GetItem, Localstorage } from '../Localstorage/Localstorage';
import Questions from '../Questions/Questions';

import UseageDetails from '../UsageDetails/UseageDetails';
import './Fitness.css'

const Fitness = () => {
    const [instruments, setInstruments] = useState([]);
    const [clickedData, setClickedData] = useState([])
    const [clickbtn, setClickBtn] = useState([0])

    useEffect( () =>{
        fetch('instrumentData.json')
        .then(res => res.json())
        .then(data => setInstruments(data))
    }, [])

    useEffect( ()=>{
        const storeTime = GetItem()
        const storeClickbtn = [storeTime.brkTime]
        setClickBtn(storeClickbtn)
    }, [])

    const handleAddToUseDetails = (gymDetails) =>{   
        const newData = [...clickedData, gymDetails]
        setClickedData(newData);
    }

    const handlebreakbtn = (brkTime) =>{
        // console.log(gymDetails)
       Localstorage(brkTime)
        const newbrkData = [brkTime]
        setClickBtn(newbrkData);
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

                <Questions></Questions>
            </div>
            
            <div className="usageTime-container">
                <UseageDetails 
                clickData={clickedData}
                handlebreakbtn={handlebreakbtn}
                clickbtn={clickbtn}></UseageDetails>
            </div>
        </div>
    );
};

export default Fitness;