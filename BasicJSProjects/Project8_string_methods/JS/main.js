//Concat
function full_sentence() {
    var part_1 = "Guess what day ";
    var part_2 = "it is... ";
    var part_3 = "Christmas Day!";
    var whole_sentence = part_1.concat(part_2, part_3);
    document.getElementById("StringMethod").innerHTML = whole_sentence;
}

//Slice
function slice_Method() {
    var sentence = "Slice and Dice"
    var section = sentence.slice(10, 14);
    document.getElementById("Slice").innerHTML = section;
}

//To String
function string_Method() {
    var myNumber = 999;
    document.getElementById("ToString").innerHTML = myNumber.toString ();
}

//To Precision
function precision_method() {
    var myNumber = 124.4567891011121314;
    document.getElementById("SpecificLength").innerHTML = 
        myNumber.toPrecision(5);
}