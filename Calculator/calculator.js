let nonNums = [
    "OFF",
    "ON",
    "AC",
    "=",
    "+",
    "-",
    "*",
    "/",
    "(",
    ")"
]


function hello(idName) {
    console.log(idName);
}

function offClicked(){
    let screenText = document.getElementById("screen-text");
    screenText.innerHTML = "OFF";
    for(var i = 0; i <= 9; i++){
        let button = document.getElementById(i);
        button.style.pointerEvents = 'none';
        button.style.backgroundColor = 'gray';
    }
    for(var i = 0; i < 10; i++){
        let buttonStr = nonNums[i];
        let button = document.getElementById(buttonStr);
        button.style.pointerEvents = 'none';
        button.style.backgroundColor = 'gray';
    }
    let button = document.getElementById("ON");
    button.style.pointerEvents = 'auto';
    button.style.backgroundColor = 'black';
    
}

function onClicked(){
    let screenText = document.getElementById("screen-text");
    screenText.innerHTML = "00000000";
    for(var i = 0; i <= 9; i++){
        let button = document.getElementById(i);
        button.style.pointerEvents = 'auto';
        button.style.backgroundColor = 'black';
    }
    for(var i = 0; i < 10; i++){
        let buttonStr = nonNums[i];
        let button = document.getElementById(buttonStr);
        button.style.pointerEvents = 'auto';
        button.style.backgroundColor = 'black';
    }
    let button = document.getElementById("ON");
    button.style.pointerEvents = 'none';
    button.style.backgroundColor = 'gray';
}