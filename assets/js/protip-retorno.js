

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

const [ casado, vivo, nombre, saludo ] = imprimeArgumentos2( 'kevin', true, 10, false, 'Hola' );

console.log( { argumentos } );
console.log( { casado, vivo, nombre, saludo } );


const { apellido: nuevoApellido } = crearPersona( 'Kevin', 'Echeverri' );
console.log( { nuevoApellido } );




const tony = {
    nombre: 'Tony Stark',
    codeName: 'IronMan',
    vivo: false,
    edad: 40,
    coords: {
        lat: 45.2,
        lon: -118.70
    },
    trajes: [ 'Mark I', 'Mark V', 'Hulkbuster' ],

};


const imprimePropiedades = ( { nombre, codeName, vivo, edad = 0, trajes } ) => {
    console.log( { nombre } );
    console.log( { codeName } );
    console.log( { vivo } );
    console.log( { edad } );
    console.log( { trajes } );
};


imprimePropiedades( tony );
