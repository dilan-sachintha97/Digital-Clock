setInterval(updateClock,1000)

function updateClock(){
    let myDate = new Date();
    let myHours = myDate.getHours()
    let myMinutes = myDate.getMinutes()
    let mySec = myDate.getSeconds()

    if(myHours < 10){myHours = "0"+myHours}
    if(myMinutes < 10){myMinutes = "0"+myMinutes}
    if(mySec < 10){mySec = "0"+mySec}

    let myTime = `${myHours}:${myMinutes}:${mySec}`
    document.getElementById('clock-time').innerText=myTime;
}