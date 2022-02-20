// This function clear all the values
function clearScreen() {
    document.getElementById("ipt").value = "";
    document.getElementById("opt").value = "";
}

// This function display values
function display(value) {
    if(document.getElementById("ipt").value == "WELCOME!!!" & document.getElementById("opt").value == "ANS HERE"){
        clearScreen();
    }
    document.getElementById("ipt").value += value;
}

// Backspace Implementation
function backSpace(){
    var newStr = document.getElementById("ipt").value.slice(0,-1);
    document.getElementById("ipt").value = newStr;
}

// This function evaluates the expression and return result
function calculate() {
    var p = document.getElementById("ipt").value;
    var q = eval(p);
    document.getElementById("opt").value = "ANS="+q;
}