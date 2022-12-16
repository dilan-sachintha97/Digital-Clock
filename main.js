setInterval(updateClock,1000)

function updateClock(){
    let myDate = new Date();
    let myHours = myDate.getHours()
    let myMinutes = myDate.getMinutes()
    let mySec = myDate.getSeconds()

    let myTime = `${myHours}:${myMinutes}:${mySec}`
    document.getElementById('clock').innerText=myTime;
}