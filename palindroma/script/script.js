
let frase = prompt("Inserisci una frase per verificare se è palindroma: ");

console.log(frase);

isPalindromaRev(frase);


function isPalindroma(fraseDaVerificare) {

    let counterFromStart, counterFromEnd;
    let charSaverFromEnd, charSaverFromStart;

    counterFromEnd = fraseDaVerificare.length - 1;

    for (counterFromStart = 0; counterFromStart < counterFromEnd; counterFromStart++) {

        charSaverFromStart = fraseDaVerificare[counterFromStart];
        charSaverFromEnd = fraseDaVerificare[counterFromEnd];

        while (charSaverFromStart === " ") { ++counterFromStart; charSaverFromStart = fraseDaVerificare[counterFromStart]; }
        while (charSaverFromEnd === " ") { --counterFromEnd; charSaverFromEnd = fraseDaVerificare[counterFromEnd]; }

        if (charSaverFromStart === charSaverFromEnd) {
            counterFromEnd -= 1
        }

        if (charSaverFromStart === charSaverFromEnd && counterFromStart === counterFromEnd) {
            console.log("Wow la parola è palindroma!!");
            break;
        }

        if (charSaverFromStart !== charSaverFromEnd) {

            console.log("La parola non è palindroma!!");
            break;
        }

    };
}

function isPalindromaRev(fraseDaVerificare) {

    let counterFromStart, counterFromEnd;
    let charSaverFromEnd, charSaverFromStart;
    let wordLength = fraseDaVerificare.length;


    counterFromEnd = wordLength - 1;

    if (wordLength % 2 === 0) {

        for (counterFromStart = 0; counterFromStart < (wordLength / 2);) {

            charSaverFromStart = fraseDaVerificare[counterFromStart];
            console.log(charSaverFromStart);
            charSaverFromEnd = fraseDaVerificare[counterFromEnd];
            console.log(charSaverFromEnd);

            if (charSaverFromStart === charSaverFromEnd) {
                --counterFromEnd
                ++counterFromStart
            };


            if (counterFromStart >= counterFromEnd) {
                console.log("Wow la parola è palindroma!!");
                break;
            };

            if (charSaverFromStart !== charSaverFromEnd) {

                console.log("La parola non è palindroma!!");
                break;
            };

        }

    }
}