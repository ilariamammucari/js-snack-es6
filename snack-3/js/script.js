// Utilizzando const e/o let. Dare la possibilità di inserire due parole. Verificare se le due parole hanno la stessa lunghezza. Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

// *****funzioni
const lunghezza = (par1,par2) => {
    if ( par1.length > par2.length ){
        console.log(`La parola più lunga è la prima: ${par1}`);
    } else if ( par1.length < par2.length ){
        console.log(`La parola più lunga è la seconda: ${par2}`);
    } else {
        console.log(`Le due parole sono lunghe uguali: ${par1}, ${par2}`);
    }
}
// *****/funzioni


const parola1 = prompt('Inserisci una parola').trim();
const parola2 = prompt('Inserisci un\'altra parola').trim();

lunghezza(parola1,parola2);
