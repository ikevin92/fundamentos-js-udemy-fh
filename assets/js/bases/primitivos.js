// Strings
let nombre = 'Peter Parker';
console.log( nombre );

nombre = 'Ben Parker'; // se aconseja usar comilla simpre
console.log( nombre );

nombre = "Tia May";
nombre = `Tia May`;

console.log( typeof ( nombre ) );

nombre = 12;
console.log( typeof ( nombre ) );


// Booleanos
let esMarvel = true; // true o false
console.log( typeof esMarvel );

// numeros
let edad = 33;
console.log( typeof edad );

edad = 33.13;
console.log( typeof edad );


let superPorder;
console.log( typeof superPorder ); // undefined

let soyNull = null;
console.log( typeof soyNull ); // object

// Symbols
let symbol1 = Symbol( 'a' );
let symbol2 = Symbol( 'a' );
console.log( typeof symbol1 );

console.log( symbol1 === symbol2 );
