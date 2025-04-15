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
    const container=document.querySelector('.squaredivs');
    const innerSquares=container.querySelectorAll('.squares');
    
    for(let div of innerSquares) {
            div.addEventListener('mouseover', function() {
            if (this.classList.contains("colored")){
                this.classList.remove('colored');
            }
        });
    };
}
    

function resetButton(){
    const container=document.querySelector('.squaredivs');
    const innerSquares=container.querySelectorAll('.squares'); //This returns an array like structure with all the squares classes

        for(let div of innerSquares){
            div.classList.remove('colored');
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



function Draw(){
    const container=document.querySelector('.squaredivs');
    const innerSquares=container.querySelectorAll('.squares');
    
    for(let div of innerSquares) {
        div.addEventListener('mouseover', function() {
        this.classList.add('colored');
    });
};
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

squareMultiply();