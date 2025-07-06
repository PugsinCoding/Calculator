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

var equation = []

function defState(){
    offClicked();
}

function clickButton(buttonName){
    let screenText = document.getElementById("screen-text");
    screenText.innerHTML = "";
    if(buttonName != "AC" && buttonName != "ON" && buttonName != "OFF" && buttonName != "="){
        equation.push(buttonName);
    }
    let i = 0;
    while(i < equation.length && i < 15){
        screenText.innerHTML += equation[i];
        i++;
    }
}

function offClicked(){
    let screenText = document.getElementById("screen-text");
    screenText.innerHTML = "";
    equation = [];
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
    equation = [];
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

function cleared(){
    onClicked();
}

function goofingAround(){
    let screenText = document.getElementById("screen-text");
    let eqStr = "";
    let i = 0;
    while(i < equation.length && i < 15){
        eqStr += equation[i];
        i++;
    }
    let result = eval(eqStr);
    screenText.innerHTML = result;
}
