

const carros = [ 'Ford', 'Mazda', 'Honda', 'Toyota' ];

console.warn( 'While' );

//variable de control
let i = 0;

// while ( i < carros.length ) {
//     console.log( carros[ i ] );
//     i++;
// }

// undefined
// null
// false

while ( carros[ i ] ) {

    if ( i === 1 ) {
        // break;
        i++;
        continue;
    }
    console.log( carros[ i ] );
    i++;
}



// DO WHILE
console.warn( 'Do While' );
let j = 0;

do {
    console.log( carros[ j ] );
    j++;
} while ( carros[ j ] );