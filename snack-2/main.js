/* Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console */

const teams = [
    {
        nome: 'Atletico ma non troppo',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Real Birra',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Leiceres',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Valponte',
        punti: 0,
        falli: 0
    }

]

for (let i = 0; i < teams.length; i++) {
    teams[i].punti = Math.floor(Math.random() * 100) + 1;
    teams[i].falli = Math.floor(Math.random() * 50) + 1;
}

const nameFouls = []
for (let i = 0; i < teams.length; i++) {
    nameFouls.push({nome: teams[i].nome, falli: teams[i].falli })
}

console.log(teams);

console.log(nameFouls);
