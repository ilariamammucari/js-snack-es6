// Partendo da un array creiamone uno nuovo con solo i valori che hanno la posizione compresa tra i due numeri inseriti dall'utente
// Usiamo i nuovi metodi degli array foreach o filter
// Esempio:
// const myArray = ['Pippo', 'Pluto', 'Paperino', 'Paperone', 'Paperina', 'Paperoga'];
// Se l’utente inserisce 2 numeri: 1,4 allora selezioniamo 'Pluto', 'Paperino', 'Paperone', 'Paperina'

const arrayDiBase = ['Pippo', 'Pluto', 'Paperino', 'Paperone', 'Paperina', 'Paperoga'];

let num1 = parseInt(prompt('Inserisci un numero compreso fra 0 e 6'));
let num2 = parseInt(prompt('Inserisci un altro numero che sai maggiore del precedente e sempre compreso fra 0 e 6'));

if ( num2 < num1 ){
    const temporale = num2;
    num2 = num1;
    num1 = temporale;
}

// con filter
// const arrayUtente = arrayDiBase.filter((element,index) => {

//     return index >= num1 && index <= num2;

// });
// console.log(arrayUtente);


//con foreach
const utente = [];

arrayDiBase.forEach((element,index) => {
    if ( index >= num1 && index <= num2 ){
        utente.push(element);
    }
});
console.log(utente);


