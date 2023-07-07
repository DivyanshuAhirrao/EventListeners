
// Handling the onclick event :- 
function Click() {
    confirm("onclick activated, are you sure you want to reset..!!")
}


// Handling the onsubmit event :- 
function Submit() {
    confirm("onsubmit activated, are you sure you want to submit.!!")
}


// Handling the onblur event :- 
function Blured(){
    let capital = document.getElementById('name-input')
    capital.value = capital.value.toUpperCase();
}


// Handling the onfocus event :- 
let x = document.getElementById('pass-input')
function Focused() {
   x.style.backgroundColor = 'orange'
}
function be() {
    x.style.backgroundColor = 'white'
}
x.addEventListener("blur",be);


//Handling the onmouseover and onmouseout function :- 
let mouse = document.getElementById('btn-mouse')
function mouseOver(){
   document.body.style.backgroundColor='grey'
}
function mouseOut(){
    document.body.style.backgroundColor='aliceblue'
}

//Handling the onmouseover and onmouseout function :- 

let key = document.getElementById('pin-input')

function keyup(){
    key.style.backgroundColor="lightgreen"
}

function keydown(){
     key.style.backgroundColor="red"
}
function keybe(){
    key.style.backgroundColor = 'white'
}
key.addEventListener("blur",keybe);