/* VARIABLES */
let essais = 10;
const nbreMax = 100;
let nbreAleatoire = Math.floor(Math.random() * nbreMax);

let reponse = document.getElementById("reponse");
let input = document.getElementById("input");
const blocEssais = document.getElementById("bloc-essais");
const blocRejouer = document.getElementById("bloc-rejouer");

console.log(nbreAleatoire);

document.getElementById("nombre-essais").innerHTML = essais;

/* FONCTION DU BOUTON VALIDER */
function ecouterNombre() {
    let valeurInput = document.getElementById("input").value;
    document.getElementById("nombre-essais").innerHTML = essais - 1;

    if(essais > 1) {
        if(valeurInput < nbreAleatoire) {
            reponse.innerHTML = "C'est plus grand !";
            essais--;
        }
        else if(valeurInput == nbreAleatoire) {
            reponse.innerHTML = "BRAVO ! C'est gagné !";
            reponse.style.color = "green";
            input.style.backgroundColor = "green";
            blocEssais.style.display = "none";
            blocRejouer.style.display = "block";
            blocRejouer.style.marginTop = "1rem";
        }
        else {
            reponse.innerHTML = "C'est plus petit !";
            essais--;
        }    
    }
    else {
        reponse.innerHTML = "DOMMAGE ! C'est perdu !"
        reponse.style.color = "red";
        input.style.backgroundColor = "red";
        blocEssais.style.display = "none";
        blocRejouer.style.display = "block";
        blocRejouer.style.marginTop = "1rem";
    }
}

/* FONCTION DU BOUTON REJOUER */
function rejouer() {
    document.location.reload(true);
}