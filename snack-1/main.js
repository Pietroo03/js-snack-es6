/* Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore. */

const bici = [
    {
        nome: 'specialized',
        peso: 12
    },
    {
        nome: 'trek',
        peso: 8.3
    },
    {
        nome: 'scott',
        peso: 12.6
    },
    {
        nome: 'olmo',
        peso: 10.3
    }
]

let pesi = []

for (let i = 0; i < bici.length; i++) {
    const element = bici [i];

    /* console.log(element.peso); */
    pesi.push(element.peso)
    
}

console.log(pesi);

let findLowest = Math.min(...pesi)
console.log(findLowest);





