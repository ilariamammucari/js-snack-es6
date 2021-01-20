// Partendo da un array creiamone uno nuovo con solo i valori che hanno la posizione compresa tra i due numeri inseriti dall'utente
// Usiamo i nuovi metodi degli array foreach o filter
// Esempio:
// const myArray = ['Pippo', 'Pluto', 'Paperino', 'Paperone', 'Paperina', 'Paperoga'];
// Se l’utente inserisce 2 numeri: 1,4 allora selezioniamo 'Pluto', 'Paperino', 'Paperone', 'Paperina'

const arreyDiBase = ['Pippo', 'Pluto', 'Paperino', 'Paperone', 'Paperina', 'Paperoga'];

let num1 = parseInt(prompt('Inserisci un numero compreso fra 0 e 6'));
const num2 = parseInt(prompt('Inserisci un altro numero che sai maggiore del precedente e sempre compreso fra 0 e 6'));


// const arreyUtente = [];
// while ( num1 != num2 ){
//     arreyUtente.push(arreyDiBase[num1])
//     num1++;
// }
// console.log(arreyUtente);

const arreyUtente = arreyDiBase.filter((element,index) => {
    return index == num1 || index > num1 || index == num2;

});
console.log(arreyUtente);
// da capire


