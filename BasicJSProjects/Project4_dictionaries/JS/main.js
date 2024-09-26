// Dictionary Assignment

function my_Dictionary() { 
    var travel = {
        Country: "The Netherlands",
        Continent: "Europe",
        Capital: "Amsterdam",
        Population: "600k",
    };
    delete travel.Continent; // this removes the Continent KVP from the Dictionary
    document.getElementById("Dictionary").innerHTML = travel.Continent;
}

