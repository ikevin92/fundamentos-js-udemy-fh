

const elMayor = ( a, b ) => ( a > b ) ? a : b;

const tieneMembresia = ( miembro ) => ( miembro ) ? '2 dolares' : '10 dolares';

console.log( elMayor( 15, 25 ) );
console.log( tieneMembresia( true ) );
console.log( tieneMembresia( false ) );


const amigo = true;
const amigosArr = [
    'Peter',
    'Tony',
    'Hulk',
    amigo ? 'Thor' : 'Loki',  // ternario dependiendo el valor de amigo
    ( () => 'Nick Fury' )(), // funcion anonima autoinvocada
    elMayor( 12, 16 )
];

console.log( { amigosArr } );



const nota = 90; // A+ A B+
const grado = nota >= 95 ? 'A+' :
    nota >= 90 ? 'A' :
        nota >= 85 ? 'B+' :
            nota >= 80 ? 'C+' : 'F';

console.log( { grado } );


