
function removeZero() {
    let val = document.getElementById("rezultat").innerHTML;   
    if (val == "0") {
         val = " "
         document.getElementById("rezultat").innerHTML = val;
    }
}
function percent() {
    let value = document.getElementById("rezultat").innerHTML;
    value = value / 100;
    document.getElementById("rezultat").innerHTML = value;
}
function afisare(value) {
    removeZero()
    document.getElementById("rezultat").innerHTML += value;
}
function rezolva() {
    removeZero()
    let eq = document.getElementById("rezultat").innerHTML;
    let solve = eval(eq);
    document.getElementById('rezultat').innerHTML = solve;
}
function clearDisplay() {
    document.getElementById('rezultat').innerHTML = "0";
}
function backSpace() {
    let back = document.getElementById('rezultat').value
    back = back.slice(0,-1)
  } 