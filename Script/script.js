
let frase  = prompt("Inserisci una frase per verificare se è palindroma: ");

let fraseArray = [frase];

isPalindroma(fraseArray);


function isPalindroma (fraseDaVerificare) {

    let counterFromStart, counterFromEnd;
    let charSaverFromEnd, charSaverFromStart;

    counterFromEnd = fraseDaVerificare.length;

    for (counterFromStart = 0; counterFromStart < counterFromEnd; counterFromStart++) {

        charSaverFromStart = fraseDaVerificare[counterFromStart];
        charSaverFromEnd = fraseDaVerificare[counterFromEnd];

        if (charSaverFromStart === " ") {++counterFromStart; charSaverFromStart = fraseDaVerificare[counterFromStart];};
        if (charSaverFromEnd === " ") {--counterFromEnd; charSaverFromStart = fraseDaVerificare[counterFromEnd];};

    }
}