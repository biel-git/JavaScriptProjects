//Local + Global variables
var x = 10;

function Add_numbers_1() {
    var x = 99;
    document.write(10 + x + "<br>");
}

function Add_numbers_2() {
    document.write(x + 11);
    console.log(x);
}

Add_numbers_1();
Add_numbers_2();

//If statement

function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "It is not 6PM yet"
    }
}

function get_Reply() {
    var user_input = document.getElementById("userInput").value;
    if (user_input & 2 === 0) {
        reply = "You entered an even number!";
        document.getElementById("feedback").innerHTML = reply;
    }
    else {
        reply = "That is an odd number!"
        document.getElementById("feedback").innerHTML = reply;
    }
}

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time <12 == Time > 0) {
        Reply = "It is sometime in the AM!";
    } else if (Time >= 12 == Time < 18) {
        Reply = "It is PM time!";
    } else {
        Reply = "It is evening time!";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}