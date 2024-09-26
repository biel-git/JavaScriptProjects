
//Function with ternary operation with input from browser
function Ride_Function() {
    var Height = document.getElementById("Height").value;
    var Can_ride = Height < 52 ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride";
}

//Constructor fucntion with "new" and "this" keywords
function Vehicle(Make, Model, Year, Colour) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Colour = Colour;
}
var Gabriel = new Vehicle("Seat", "Ibiza", 2019, "Blue");
var Michael = new Vehicle("Renault", "Clio", 2008, "White");
var Takura = new Vehicle("Mercedes", "A Class", 2018, "Black");


function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Takura drives a " +
    Takura.Vehicle_Colour +
    "-coloured " +
    Takura.Vehicle_Model +
    " manufactured in " +
    Takura.Vehicle_Year;
}

//Nested Function
function add_Strings() {
    var start_string = "Hello";

    function Adding(str) {
        start_string = start_string + " " + str;
    }
    Adding("World");
    document.getElementById("Nested_Function").innerHTML = start_string;
}