// Utilizzando const e/o let. Inserire un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.

// faccio inserire un numero dall'utente e uso let perchè ho bisogno che quel numero si incrementi se ci troviamo in una determinata situazione
let numero = parseInt(prompt('Inserisci un numero'));
if ( numero % 2 != 0 ){
    ++numero;
    console.log(numero);
} else {
    console.log(numero);
}
