
let juegos = [ 'zelda', 'mario', 'Metroid', 'pokemon' ];
console.log( 'Largo:', juegos.length );


let primero = juegos[ 2 - 2 ];
let ultimo = juegos[ juegos.length - 1 ];

console.log( { primero, ultimo } );

juegos.forEach( ( juego ) => { console.log( juego ); } );

juegos.forEach( ( elemento, indice, arr ) => {
    console.log( { elemento, indice, arr } );
} );


// insertamos nuevo juegos
let nuevaLongitud = juegos.push( 'Zero' );
console.log( { nuevaLongitud, juegos } );

// agregamos al final
nuevaLongitud = juegos.unshift( 'Mortal' );
console.log( { nuevaLongitud, juegos } );

// borra el ultimo
let juegoBorrado = juegos.pop();
console.log( { juegoBorrado, juegos } );


// borrar de acuerdo a la posicion
let pos = 1;
let juegosBorrados = juegos.splice( pos, 2 );
console.log( { juegosBorrados, juegos } );

// busqueda de un valor dentro del arry
let metroidIndex = juegos.indexOf( 'Metroid' ); // caSeSensitive
console.log( { metroidIndex } );
