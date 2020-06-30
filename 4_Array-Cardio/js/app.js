"use strict"

const gamers = [
    { first: 'Marcelo', last: 'Coldzera', year: 1989, passed: 2045},
    { first: 'Christopher', last: 'GeT_RiGhT', year: 1994, passed: 2057},
    { first: 'Richard', last: 'shox', year: 1996, passed: 2060},
    { first: 'Olof', last: 'olofmeister', year: 1998, passed: 2080},
    { first: 'Nicolai', last: 'dev1ce', year: 1980, passed: 2056},
    { first: 'Kenny', last: 'kennyS', year: 1987, passed: 2075},
    { first: 'Janusz', last: 'snax', year: 2000, passed: 2080},
]

const teams  = ["Abstract, Connoisseurs", "Hypertext, Assassins", "Callback, Cats", "Boolean, Autocrats", "Runtime, Terror", "CAMA, Chronicles", "FrontPage, Freebirds", "Hoard, Warriors", "Daemon, Demons", "Thrift, Torrent", "Software, Chasers", "Gob, Geeklords", "Celestial, Interface", "Open, Source", "Data, Pirates", "FastCAD, Stormtroopers", "Goo, Gnomes", "DBMS, Hoodlums", "Firmware, Rebels", "Multiprocessing, Moguls", "Identity, Imbalance", "Emulation, Nerds", "Hex, Clan", "Code, Poltergeists", "Robust, Routine", "Debug, Entity", "Glueware, Gremlins", "Epic, Boost", "Mind, Optimizers", "Sweep, Collider"]


//Filter
const oldGamers = gamers.filter(gamer =>gamer.year > 1990);
console.table(oldGamers);

//Map
const removeComma = teams.map(team => team.replace(',','') );
console.log(removeComma);

const fullNames = gamers.map(gamer => `Name: ${gamer.first} ${gamer.last}`);
console.log(fullNames);

//Living duration of single gamers
const fullLife = gamers.map(gamer => `${gamer.first} ${gamer.last} lived: ${gamer.passed - gamer.year} years`);
console.table(fullLife);

//Sorting
// DSC
const orderedByYear = gamers.sort((a,b) => b.year-a.year);
console.table(orderedByYear);

//ordered by first name
const orderedByFName = gamers.sort((a,b) => a.first>b.first? 1:-1);
console.table(orderedByFName);

//reduce
//Total Living duration of gamers
const totalLife = gamers.reduce((total,inventor) => {
    return total + (inventor.passed - inventor.year);
},0);
console.log(totalLife);

//Sorting the gamers by years lived (DSC)
const older = gamers.sort((a,b) => {
    let currentGuy = a.passed - a.year;
    let nextGuy = b.passed - b.year;

    return currentGuy > nextGuy ? -1:1;
});
console.table(older);

//Extracting data from a webpage
// https://www.timeout.com/paris/en/museums/unmissable-museums-in-paris


//const elem = document.getElementsByTagName('h3')[0].children[0].textContent;

//getting all h3 elements
//const h3 = document.getElementsByTagName('h3');

//Extracting text content from anchor elements
// museums = []
// for (let i =0;i<h3.length-1;i++) {
//     museums[i] = h3[i].children[0].innerText;
// }

//filtering extracted data
//Getting which has " de " in it
// const de = museums.filter(museumName => museumName.includes(' de ') );

//Printing museums with 'de' in it
// console.log(de);


//Sorting team names using their last name
//lexicographical order

const sortedTeams = teams.sort((a,b) => {
    const [,alast] = a.split(', ');
    const [,blast] = b.split(', ');
    
    return alast > blast ? 1:-1;

})

console.table(sortedTeams);

// array reduce exercise
const weaponlist = ['Aphelios','Calibrum','Aphelios','Calibrum','Calibrum','Severum','Gravitum','Infernum','Gravitum','Gravitum','Crescendum']

const weapons = weaponlist.reduce((obj,item) => {
    if(!obj[item])
        obj[item] = 0;

    obj[item]++;
    return obj;

},{});
console.log(weapons);











