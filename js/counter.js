let counterNumber = document.getElementById('counter-number');
let initialCounterNumber = counterNumber.innerHTML;
let actualCounterNumber = initialCounterNumber;

function increaseCounterNumber() {
    ++actualCounterNumber;
    counterNumber.innerHTML = actualCounterNumber;   
}

function decreaseCounterNumber() {
    --actualCounterNumber;
    counterNumber.innerHTML = actualCounterNumber;    
}

