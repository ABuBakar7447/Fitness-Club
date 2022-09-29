
const Localstorage = (brkTime) => {
    let brktime ={brkTime}
    localStorage.setItem('Break-Time', JSON.stringify(brktime))
    // const getTime = localStorage.getItem('Break-Time')
    // console.log(JSON.parse(getTime))
};

const GetItem = () =>{
    let brktime = {}
    const getTime = localStorage.getItem('Break-Time')
    if(getTime){
        brktime = JSON.parse(getTime)
    }
    else{
        brktime = {brkTime: 0}
    }
   
    return brktime
}
export{Localstorage, GetItem}