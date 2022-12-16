setInterval(updateClock,1000)

function updateClock(){
    let myDate = new Date();
    document.getElementById('clock').innerText=myDate;
}