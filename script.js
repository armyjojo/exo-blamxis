/* EXERCICE 1 */
function carre() {
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

/* EXERCICE 3 */

function nbpair() {
    var nbr8 = document.getElementById("nbr6").value;
    var nbr7=0, nbr9=[], nbr10=nbr8+1;
    while(nbr7++<nbr8){ !(nbr7&1) && nbr9.push(nbr7)};
    return document.getElementById("nbr7").value=(nbr9.join('-'));
}

/* EXERCICE 4 */

function premiers() {
    var nbr11=[],nbr12,nbr13,compte=0;
    var nbr12=1;
    var nbr13=Number(document.getElementById("nbr14").value);
    
    if(nbr13>nbr12){
    for(var nbr15=nbr12;nbr15<=nbr13;nbr15++){
    for(var nbr16=1;nbr16<=nbr15;nbr16++){
    if(nbr15%nbr16==0){
    compte=compte+1;
    }
    }
    if(compte==2){
    nbr11.push(nbr15);
    }
    compte=0;
    }
    document.getElementById("nbr9").value=(nbr12+" et "+nbr13+" : "+nbr11.join(' ; '));
    }
    else{
    document.getElementById("nbr9").value=("Impossible !");
    }}

    /* EXERCICE 5 */

    function multiplication(nbr20)
        {
        var nbr20=Number(document.getElementById("nbr17").value);
        var nbr21= ("nbr18");
        var nbr19;
        for (nbr19=0; nbr19<=10; nbr19++) {
            nbr21=nbr20*nbr19;
            document.getElementById("nbr18").innerHTML+=(nbr20 + " x " + nbr19 + " = " + nbr20 * nbr19 + " ; ");
            }
        }

    /* EXERCICE 6 */

    function fact(nbr22)
        {
        var nbr22=Number(document.getElementById("nbr23").value);
        var nbr24, nbr22, nbr25 = 1;
        for(nbr24 = 1; nbr24 <= nbr22; nbr24++)  
        {
            nbr25 = nbr25 * nbr24;
        }  
        return document.getElementById("nbr26").value+= "Pour le nombre " + nbr22 + " la factorielle est " + nbr25 + ". ";
        }

    /* EXERCICE 7 */

    function invers(nbr27)
        {
        var nbr27=Number(document.getElementById("nbr28").value);
        var nbr29 = 1;
        var nbr30 = nbr29 / nbr27;
    return document.getElementById("nbr31").value+= "Pour le nombre " + nbr27 + " son inverse est " + nbr30 + " . ";
    }  

    /* EXERCICE 8 => nbr32 */

    function PGCD1nbr(){
        var nbr33=Number(document.getElementById("nbr32").value);
        var nbr32 = 1;
        var nbr34 = nbr33 / nbr32;
        return document.getElementById("nbr35").value+=nbr34;
    }

    /* EXERCICE 9 */

    function ppd1nbr(){
        var nbr36=Number(document.getElementById("nbr37").value);
        var nbr39=nbr36/nbr36;
        return document.getElementById("nbr38").value+=nbr39;
    }

    /* EXERCICE 9 => nbr40*/