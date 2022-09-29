
const Localstorage = (brkTime) => {
    let brktime ={brkTime}
    localStorage.setItem('Break-Time', JSON.stringify(brktime))
    // const getTime = localStorage.getItem('Break-Time')
    // console.log(JSON.parse(getTime))
};


export{Localstorage}