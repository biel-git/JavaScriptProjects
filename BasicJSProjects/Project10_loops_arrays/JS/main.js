//While loop
function Call_Loop() {
    var Digit = "";
    var x = 1;
    while (x <11) {
        Digit += "<br>" + x;
        x++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

//For loop
var Fruits = [
    "Peach",
    "Banana",
    "Apple",
    "Clementine",
    "Kiwi",
    "Grapes",
    "Tangerine",
];
var content = "";
var y;
function for_Loop() {
    for (y = 0; y < Fruits.length; y++) {
        content += Fruits[y] + "<br>";
    }
    document.getElementById("List_of_Fruits").innerHTML = content;
}

//Array
function array_Function() {
    var Foods = [];
    Foods[1] = "Pasta";
    Foods[2] = "Fish";
    Foods[3] = "Meatloaf";
    Foods[4] = "Seafood";
    Foods[5] = "Rice";
    Foods[6] = "Lasagna";
    document.getElementById("Array").innerHTML =
        "My favorite food is.... " + Foods [6] + "!";
}








// LET keyword
function car() {
    let car = {
        make: "Kia",
        year: "2015",
        color: "Red",
    };

    document.getElementById("car").innerHTML =
        "I have a " + car.year + " " + car.color + " " +car.make + ".";
}