// Get the required elements
const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

// Get the time
var date = new Date();
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

// Check console tab for accuracy
console.log("Hour: " + hr + " Minutes: " + min + " Seconds: " + sec);

// Add seconds precision to the minute & add minutes precision to the hour
let secPosition = sec*360/60;
let minPosition = (min*360/60) + (sec*(360/60)/60);
let hrPosition = (hr*360/12) + (min*(360/60)/12);


function runTheClock() {
    
    // We are not incrementally increasing the arm position. 
    // Add the degrees required for the arm to move inside this function
    secPosition = secPosition + 6; // (360/60): Total degrees/ no: of seconds
    minPosition = minPosition + (1/60)*6; // This  arm moves a distance of 1 seconds over 60 seconds
    hrPosition = hrPosition + (30/3600); // This arm should move a total of 1 hour (360/12) over 3600 sec (thats how many seconds are there in an hour)

    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

var interval = setInterval(runTheClock, 1000);