function proveraForme(forma){
    var ime = forma.ime.value;
    var prezime = forma.prezime.value;

    if(ime == ""){
        alert("Ovo polje mora biti popunjeno.");
        forma.ime.focus();
        return false;
    }
    if(ime[0] != ime[0].toUpperCase()){
        alert("Prezime mora da pocinje velikim slovom.")
        forma.ime.focus();
        return false;
    }
    if(prezime == ""){
        alert("Ovo polje mora biti popunjeno.");
        forma.prezime.focus();
        return false;
    }
    if(prezime[0] != prezime[0].toUpperCase()){
        alert("Prezime mora da pocinje velikim slovom.")
        forma.prezime.focus();
        return false;
    }
    return true;
}

function premiumOn(){
    var membership = document.getElementById("sel1");
    var premium = document.getElementById("premium").checked;
    if(premium){
        membership.disabled = false;
       
    } else{
        membership.disabled = true;
       
    }

    changeBtnColor();
}

function changeBtnColor(){
    var btn = document.getElementById("submitbtn");
    var premium = document.getElementById("sel1");
    if(premium.disabled){
        btn.style.backgroundColor = "white";
    } else{
        if(premium.value == 1){
            btn.style.backgroundColor = "silver";
        } else if(premium.value == 2){
            btn.style.backgroundColor = "yellow";
        } else if(premium.value == 3){
            btn.style.backgroundColor = "skyblue";
        }
    }
    
}