let sceltaUtente = prompt("Inserisci 'pari' o 'dispari' (il computer prenderà la scelta opposta): ");
let sceltaComputer;

if (sceltaUtente === "pari") {
    sceltaComputer = "dispari";
}

else {
    sceltaComputer = "pari";
}

let numeroUtente = prompt("Inserisci un numero da 1 a 5: ");

if (numeroUtente > 5) {
    numeroUtente = prompt("Inserisci un numero da 1 a 5, non superiore a 5: ");
}

if (numeroUtente < 1) {
    numeroUtente = prompt("Inserisci un numero da 1 a 5, non minore di 1: ");
}
