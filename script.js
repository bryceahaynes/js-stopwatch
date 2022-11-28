// Defining both types of seconds and milliseconds needed.
let mil = 00;
let sec = 00;
let secElement = document.getElementById('sec');
let milElement = document.getElementById('mil');

// Interval storage.
let Interval = '';

// Defining buttons. 
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');

// Start button + interval
start.onclick = () =>{
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10)
    milElement.innerHTML = mil + '0';
}

// Stop button + clearing interval
stop.onclick = () => {
    clearInterval(Interval);
}

// Clearing interval + resetting both types of seconds & milliseconds
reset.onclick = () => {
    clearInterval(Interval);
    mil = '00';
    sec = '00';
    milElement.innerHTML = mil;
    secElement.innerHTML = sec;
}

// Start timer function. Increments milliseconds by 1 and checks conditionals to see whether an additional '0' is required or not. 
function startTimer(){
    mil++;
    // Adds a '0' in front of mil if mil <= 9.
    if(mil <= 9){
        milElement.innerHTML = '0' + mil;
    }
    // Updates HTML element to 'mil' variable if above 9. This removes the '0' placed above
    if(mil > 9){
        milElement.innerHTML = mil;
    }

    // Increments seconds by 1 if 'mil' variable is > 99. Resets 'mil' to 0 if true.
    if (mil > 99){
        console.log('seconds');
        sec++;
        secElement.innerHTML = sec;
        mil = 0;
        milElement.innerHTML = '0' + 0;
    }
    // Same action for seconds as seen on line 39.
    if(sec > 9){
        secElement.innerHTML = sec;
    }
    // Checks to see if 'sec' >= 1 because of bug with 3 zeros being placed in front instead of 2 (000:00). 
    if(sec >= 1 && sec <= 9){
        secElement.innerHTML = '0' + sec
    }
}
