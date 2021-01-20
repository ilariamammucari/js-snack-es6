// Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal.


const bici = [
    {
        nome: 'BMX',
        peso: 7
    },
    {
        nome: 'Gimondi',
        peso: 8
    },
    {
        nome: 'Colnago',
        peso: 6
    }
];
const bici1,bici2,bici3;
// destructuring e determino chi pesa di meno
[bici1,bici2,bici3] = bici;
let biciRiferimento = bici1.peso;

if ( bici2.peso < biciRiferimento ) {
    biciRiferimento = bici2;
} else if ( bici3.peso < biciRiferimento ){
    biciRiferimento = bici3;
}
console.log(`la bici che pesa di meno è: ${biciRiferimento.nome}. Pesa ${biciRiferimento.peso}!`);