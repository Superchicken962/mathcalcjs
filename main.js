function maths() {
    var mathinput1 = document.getElementById("math1n").value;
    var mathinput2 = document.getElementById("math2n").value;
    var math1 = parseInt(mathinput1);
    var math2 = parseInt(mathinput2);
    var mathinputoperator = document.getElementById("mathoperator").value;
    var mathr = 0;
    if (mathinputoperator == "Addition") {
        mathr = Math.floor(math1 + math2);
    } else if (mathinputoperator == "Subtraction") {
        mathr = Math.floor(math1 - math2);
    } else if (mathinputoperator == "Multiplication") {
        mathr = Math.floor(math1 * math2);
    } else if (mathinputoperator == "Division") {
        mathr = Math.floor(math1 / math2);
    }
    document.getElementById("mathresult").innerHTML = mathr;
}