const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
    display.scrollLeft = display.scrollWidth;

}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}
function twoZeroes(){
    display.value += "00";
}

function deleteOneCharacter(){
    display.value = display.value.slice(0,-1);
}