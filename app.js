//This is the JavaScript file

document.querySelector('#poundsVal').addEventListener('input', 
function(e){
    let poundsVal = e.target.value;
    document.querySelector('#gmOutput').innerHTML = poundsVal/0.0022046;
    document.querySelector('#kgOutput').innerHTML = poundsVal/2.2046;
    document.querySelector('#onOutput').innerHTML = poundsVal*16;
});