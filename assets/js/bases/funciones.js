

function saludar ( nombre ) {
    console.log( arguments ); // muestra los argumentos de la funcion
    console.log( 'Hola ' + nombre );
    // return 10;
    return [ 10, 2, 433, 2 ];

    // esto nunca se va a ejecutar
    console.log( 'codigo deps del return' );

}

const saludar2 = function ( nombre ) {
    console.log( 'Hola ' + nombre );
};

const saludarFlecha = () => {
    console.log( 'Hola flecha' );
};

const saludarFlecha2 = ( nombre ) => {
    console.log( 'Hola flecha ' + nombre );
};


saludar( 'Kevin', 28, true, 'Colombia' );
saludar2( 'Kevin' );
saludarFlecha();
saludarFlecha2( 'Maria Elena' );
// saludar();

const retornoSaludar = saludar( 'Kevin', 28, true, 'Colombia' );
console.log( { retornoSaludar } );


// TAREA 
function sumar ( a, b ) {
    return a + b;
}

const sumar2 = ( a, b ) => {
    return a + b;
};

const sumar3 = ( a, b ) => a + b; // funcion de 1 sola linea


console.log( sumar( 1, 2 ) );
console.log( sumar2( 1, 2 ) );
console.log( sumar3( 1, 2 ) );

function getAleatorio () {
    return Math.random();
}

// convertir get aleatorio en una funcion de flecha sin llaves
const getAleatorio2 = () => Math.random();


console.log( getAleatorio() );
console.log( getAleatorio2() );