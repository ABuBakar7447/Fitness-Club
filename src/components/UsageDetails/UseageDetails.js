import React from 'react';
import './UseageDetails.css'
import logo from '../image/student-5.png'

const UseageDetails = (props) => {
    const {clickData, handlebreakbtn,clickbtn} = props;
    // const {time} =clickData;
    console.log(clickbtn)
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
                <p className='excercise-details'>
                    Add A Break
                </p>

                <div className='btn-div'>
                    <button className='brk-btn' onClick={() => handlebreakbtn(10)}>10</button>
                    <button className='brk-btn' onClick={() => handlebreakbtn(20)}>20</button>
                    <button className='brk-btn' onClick={() => handlebreakbtn(30)}>30</button>
                    <button className='brk-btn' onClick={() => handlebreakbtn(40)}>40</button>
                </div>

            </div>
            



            <div>
                <p className='excercise-details'>Excercise Details</p>
                <div className='total-time'>
                    <p>
                        Exercise time
                    </p>
                    <p>
                        <span className='space-right'>{totalTime}</span> min
                    </p>
                </div>
                <div className='total-time'>
                    <p>
                        Break time
                    </p>
                    <p>
                       <span className='space-right'>{clickbtn[0]}</span> sec
                    </p>
                </div>
            </div>
           
            
        </div>
    );
};

export default UseageDetails;