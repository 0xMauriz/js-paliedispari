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

const numeroPC = inrangeRandomNumberGenerator(1,5);

console.log(numeroPC);

let sumOfNumbers = numeroUtente + numeroPC;


let isPariSaver = isPari(sumOfNumbers);

console.log(isPariSaver);

if ( sceltaUtente === isPariSaver) {
    console.log("Hey, hai vinto!");
}

else {
    
    console.log("Whoopsie, vince il pc!");
}


// Sezione funzioni per comodità

function inrangeRandomNumberGenerator(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

function isPari (number) {
    if (number % 2 === 0) {
        return "pari";
    }

    else {
        return "dispari";
    }
}