import React from 'react';
import './UseageDetails.css'
import logo from '../image/student-5.png'

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

            <div className='userDetails'>

                <img src={logo} alt="" />
                <div className='detailed-information'>
                    <p>Athar ALi <br /> Dhaka, Bangladesh</p>
                </div>
                

            </div>

            <div className='body-details'>
                <div>
                    <p>70kg <br />Weight</p>
                </div>
                <div>
                    <p>5.6 <br />Height</p>
                </div>
                <div>
                    <p>21yrs <br />Age</p>
                </div>
            </div>



            <div>
                <p className='details-style'>Excercise Details</p>
                <div className='total-time'>
                    <p>
                        Exercise time
                    </p>
                    <p>
                        {totalTime}seconds
                    </p>
                </div>
                <div className='total-time'>
                    <p>
                        Break time
                    </p>
                    <p>
                        {totalTime}seconds
                    </p>
                </div>
            </div>
           
            
        </div>
    );
};

export default UseageDetails;