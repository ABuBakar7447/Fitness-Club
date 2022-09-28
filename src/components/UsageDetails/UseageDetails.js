import React from 'react';
import './UseageDetails.css'

const UseageDetails = (props) => {
    const {clickData} = props;
    // const {time} =clickData;
    // console.log(clickData)
    let totalTime = 0;
    for(const detail of clickData){
        totalTime = totalTime + parseInt(detail.time)
        
    }
    
    return (
        <div className='userInformation'>
           <h3>
                Exercise time : {totalTime}seconds
            </h3> 
        </div>
    );
};

export default UseageDetails;