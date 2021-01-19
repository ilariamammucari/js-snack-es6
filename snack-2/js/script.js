// Utilizzando const e/o let e template literal. Creare due tag div con due id diversi. Un div avrà il testo colorato di rosso mentre l’altro di verde. Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.

// l'arrey è fissa quindi posso usare const
const numeri = [1,2,3,4,5,6,7,8,9,10];

// utilizzo template literal per creare il template che mi serve nell'html volendo le costanti pari e dispari possiamo anche non farle e scrivere direttamente il testo all'interno dei div creati.
const pari = 'Numeri pari: ';
const dispari = 'Numeri dispari: ';
document.getElementById('template').innerHTML = 
`
    <div id='red' class='rosso'>
        ${dispari}
    </div>
    <div id='green' class='verde'>
        ${pari} 
    </div>
`; 

// per il ciclo for uso let perchè la i incrementa
for ( let i = 0; i < numeri.length; i++ ){
    if ( numeri[i] % 2 != 0 ){
        document.getElementById('red').innerHTML += numeri[i];
    } else {
        document.getElementById('green').innerHTML += numeri[i];
    }
}