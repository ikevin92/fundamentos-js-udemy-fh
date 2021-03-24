

function saludar ( nombre ) {
    console.log( arguments ); // mostramos los argumentos de la funcion
    console.log( 'Hola ' + nombre );
}

const saludar2 = function ( nombre ) {
    console.log( 'Hola ' + nombre );
};

const saludarFlecha = () => {
    console.log( 'Hola mundo' );
};


saludar( 'Kevin', 28, true, 'Colombia' );
saludar2( 'Kevin' );
// saludar2();
// saludar();