

function klikniMe(funkcija){
    var vrednost = document.getElementById("kolicina").value;
    vrednost = parseInt(vrednost);

    if(typeof vrednost != "number"){
        alert("Uneta vrednost nije broj!");
        return false;
    } else {
        if(funkcija(vrednost)){
            document.getElementById("output").innerHTML = "Kupovina uspesno obavljena";
        } else {
            document.getElementById("output").innerHTML =
              "Kupovina neuspesna";
        }
    }
}