/* EXERCICE 1 */
function exo() {
    var a=document.getElementById("nbr1").value;
    if(!isNaN(a))
    document.getElementById("nbr2").value=(Math.pow(a, 2));
    else
    document.getElementById("nbr2").value=("Impossible !");
}

/* EXERCICE 2 */

function addition() {
    var nbr3=Number(document.getElementById("nbr3").value);
    var nbr4=Number(document.getElementById("nbr4").value);
    nbr5 = nbr3 + nbr4;
    document.getElementById("nbr5").value=nbr5;
}