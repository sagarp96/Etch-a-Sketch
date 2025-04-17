const squares= document.getElementById("container");
let value=16;

function squareMultiply(value=16)
{
    for(let i=0; i< value*value; i++){
        const newSqures=document.createElement('div');
        newSqures.classList.add("squares");
        squares.appendChild(newSqures);
    }
}
function eraserButton(){
    setMode('erase'); 
    const container=document.querySelector('.squaredivs');
    const innerSquares=container.querySelectorAll('.squares');
    
    for(let div of innerSquares) {
            div.addEventListener('mouseover', function() {
            if (this.classList.contains("colored")){
                this.classList.remove('colored');
            }
            div.removeAttribute('style');
        });
    };
}
    

function resetButton(){
    const container=document.querySelector('.squaredivs');
    const innerSquares=container.querySelectorAll('.squares'); //This returns an array like structure with all the squares classes

        for(let div of innerSquares){
            div.classList.remove('colored');
            div.removeAttribute('style');
        }}  

function gridValue(){
    let value = prompt("Please enter the Grid value");
    value =parseInt(value);
    if (!value || value<1 || value>100 ||isNaN(value) || value==null) {
        alert("Please enter a grid value between 2 and 100");
        return null;
    }

    squares.innerHTML='';
    document.documentElement.style.setProperty('--grid-size', value);
    squareMultiply(value);
}

function randomColour() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function randomColourMode(){
    setMode('random'); 
    const container=document.querySelector('.squaredivs');
    const innerSquares=container.querySelectorAll('.squares');

    for(let div of innerSquares) {
        div.addEventListener('mouseover', function() {
            if (this.classList.contains("colored")){
                this.classList.remove('colored');
            }
            this.style.backgroundColor = randomColour();
        });
    }

}

function Draw(){
    setMode('draw');  
    const container=document.querySelector('.squaredivs');
    const innerSquares=container.querySelectorAll('.squares');
    // const coloredSquared=container.querySelectorAll('[style]');
    
    for(let div of innerSquares) {

    div.addEventListener('mouseover', function() {
        if (div.hasAttribute('style')){
            div.removeAttribute('style');        
    };

    this.classList.add('colored');
});

};
}

function setMode(mode) {
    const container = document.querySelector('.squaredivs');
    // Remove all mode classes
    container.classList.remove('draw-mode', 'erase-mode', 'random-mode');
    // Add the new mode class
    container.classList.add(`${mode}-mode`);
}

document.addEventListener("keydown", (event) => {
    if (event.key === "r" || event.key === "R") {
        resetButton();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "d" || event.key === "D") {
        Draw();
    }
});

    document.addEventListener("keydown", (event) => {
        if (event.key === "e" || event.key === "E") {
            eraserButton();
        }
    });

   document.addEventListener("keydown", (event) => {

        if (event.key === "n" || event.key === "N" && event.conrolkey) {
            event.preventDefault();
            gridValue();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "t" || event.key === "T") {
            randomColourMode();
        }
    });

squareMultiply();