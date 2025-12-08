let numeroUtente = prompt("Inserisci un numero da 1 a 5: ");

if (numeroUtente > 5) {
    numeroUtente = prompt("Inserisci un numero da 1 a 5, non superiore a 5: ");
}

if (numeroUtente < 1) {
    numeroUtente = prompt("Inserisci un numero da 1 a 5, non minore di 1: ");
}