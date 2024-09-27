function Food_Function() {
    var Food_Output;
    var Foods = document.getElementById("Food_Input").value;
    var Food_String = " has delicious food!";
    switch(Foods) {
        case "Burger King":
            Food_Output = "Burger King" + Food_String;
        break;
        case "Gasoline Grill":
            Food_Output = "Gasoline Grill" + Food_String;
        break;
        case "McDonald's":
            Food_Output = "McDonald's" + Food_String;
        break;
        case "KFC":
            Food_Output = "KFC" + Food_String;
        break;
        case "Taco Bell":
            Food_Output = "Taco Bell" + Food_String;
        break;
        case "Tim Hortons":
            Food_Output = "Tim Hortons" + Food_String;
        break;
        default:
        Food_Output = "Please enter a food that you see on the above list.";
    }
    document.getElementById("Output").innerHTML = Food_Output;
}



//getElementsByClassName Assignment
function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed";
}