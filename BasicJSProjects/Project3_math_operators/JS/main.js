function addition() {
    var add = 100+20;
    document.getElementById("Add").innerHTML = "100 + 20 = " + add; //Print the result in HTML
} 


function subtraction() {
    var sub = 100-20;
    document.getElementById("Sub").innerHTML = "100 - 20 = " + sub;
} 

function multiplication() {
    var mult = 100*5;
    document.getElementById("Multi").innerHTML = "100 * 5 = " + mult;
} 

function division() {
    var divide = 100/2;
    document.getElementById("Div").innerHTML = "100 / 2 = " + divide;
} 

function random() {
    document.getElementById("Rand").innerHTML = Math.random()*25;
} 

function modulus_operator() { //Defining and naming the modulus operator function
    var modulus = 38 % 4;
    document.getElementById("Mod").innterHTML =
    "When 38 is divided by 4 we have a total of: " + modulus;
}

function Increment() {
    var value = document.getElementById("IncrementText").innerHTML;

    value++;

    document.getElementById("IncrementText").innterHTML = value;
}

function Decrement() {
    var value = document.getElementById("DecrementText").innerHTML;

    value--; //Subtract one unit from the value

    document.getElementById("DecrementText").innterHTML = value;
}