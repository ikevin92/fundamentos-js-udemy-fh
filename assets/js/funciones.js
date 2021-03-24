

function saludar ( nombre ) {
    console.log( arguments ); // mostramos los argumentos de la funcion
    console.log( 'Hola ' + nombre );
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