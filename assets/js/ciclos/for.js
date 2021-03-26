
const heroes = [ 'Batman', 'Superman', 'Wonderwoman', 'Acuaman' ];

console.warn( 'For tradicional' );
for ( let i = 0; i < heroes.length; i++ ) {
    const heroe = heroes[ i ];
    console.log( heroe );
}


console.warn( 'For in' );
for ( const i in heroes ) {
    console.log( heroes[ i ] );
}


console.warn( 'For of' );
for ( const heroe of heroes ) {
    console.log( heroe );
}
