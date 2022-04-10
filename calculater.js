//this function use to add numbers
function insertNum(val) {
    document.getElementById("cal").value += val;
}
//function for evaluation
function solve() {
    var x = document.getElementById("cal").value;
    var y = eval(x);
    document.getElementById("cal").value = y;
}
//function for clearing the display
function clr() {
    document.getElementById("cal").value = "";
}
function back() {
    var x = parseInt(document.getElementById("cal").value);
    //let x = "textview.value";
    //let y = x.substring(0, x.y - 1);
    document.getElementById("cal").value = (Math.floor(x / 10)).toString();
}
function SR() {
    var x = document.getElementsByClassName("textview");
    var y = Math.sqrt(parseInt(x[0].value));
    x[0].value = y;
}
