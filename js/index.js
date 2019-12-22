//create variables and assign them default variables
let started = false;
let interval;

// add button click event listener
document.querySelector('.startButton').addEventListener("click", function(e){ 
    if (started) {
        // stop
        document.querySelector(".btn-1").innerText = "Start";
        clearInterval(interval);
    } else {
        // start
        document.querySelector(".btn-1").innerText = "Stop";
        startCountDown();
    }
    started = !started;
});

function calculateTotalInterval() {
    let hour = document.querySelector('.hour').value;
    let minute = document.querySelector('.minute').value;
    let second = document.querySelector('.second').value;
    return convertMilisecond(hour, minute, second);
}

function startCountDown() {
    let totalInterval = calculateTotalInterval();
    var finishTime = Date.parse(new Date()) + totalInterval;

    interval = setInterval(function(){ 
        intervalLeft = finishTime - Date.parse(new Date());
        let seconds = Math.floor((intervalLeft / 1000) % 60);
        let minutes = Math.floor((intervalLeft / 60000) % 60);
        let hours = Math.floor((intervalLeft / (3600000)) % 24);
        console.log(intervalLeft, hours, minutes, seconds);

        document.querySelector('.hour').value = hours;
        document.querySelector('.minute').value = minutes;
        document.querySelector('.second').value = seconds; }, 1000);   
}

function convertMilisecond(h, m, s) {
    return s * 1000 + m * 60000 + h * 3600000;
}

/*
//INPUT Kontrol 
function inputControl(input, inputType) {
    if (inputType = 'hour') {
        if (isNaN(input) || input<0 ||input>23)
        {document.querySelector('.inputAlert').innerText = 'Uygun bir saat giriniz.'}
    }
    else if (inputType = 'min') {
        if (isNaN(input) || input<0 ||input>59)
        {document.querySelector('.inputAlert').innerText = 'Uygun bir dakika giriniz.'}
    }
    else if (inputType = 'sec') {
        if (isNaN(input) || input<0 ||input>59)
        {document.querySelector('.inputAlert').innerText = 'Uygun bir saniye giriniz.'}
    }
}
  */