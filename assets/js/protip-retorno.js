

// function crearPersona ( nombre, apellido ) {

//     return {
//         nombre,
//         apellido
//     };

// }

const crearPersona = ( nombre, apellido ) => ( { nombre, apellido } );

const persona = crearPersona( 'Kevin', 'Echeverri' );
console.log( persona );


function imprimeArgumentos () {
    console.log( arguments );
}

const imprimeArgumentos2 = ( edad, ...args ) => {
    // console.log( { edad, args } );
    return args;
};


imprimeArgumentos( 'kevin', true, 10, false, 'Hola' );
const argumentos = imprimeArgumentos2( 'kevin', true, 10, false, 'Hola' );

console.log( { argumentos } );