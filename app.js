const h=document.getElementById("hstick");
const m=document.getElementById("mstick");
const s=document.getElementById("sstick");

function displayTime(){
    const date=new Date();
    let hours=date.getHours();
    let minutes=date.getMinutes();
    let seconds=date.getSeconds();
    h.style.transform=`rotate(calc(30deg*${hours} + 0.5deg*${minutes}))`;
    m.style.transform=`rotate(calc(6deg*${minutes}))`;
    s.style.transform=`rotate(calc(6deg*${seconds}))`;
}

setInterval(displayTime,1000);

