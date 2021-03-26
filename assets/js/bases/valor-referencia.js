

let a = 10;
let b = a;

a = 30;

console.log( { a, b } );


let juan = { nombre: 'Juan' };
let ana = { ...juan }; // ... es el operador spread
ana.nombre = 'Ana';


console.log( { juan, ana } );


const cambiarNombre = ( { ...persona } ) => { // si se usa ... es un parametro rest cuando no usamos corchetes
    persona.nombre = 'Tony';
    return persona;
};

let peter = { nombre: 'Peter' };
let tony = cambiarNombre( peter );

console.log( { peter, tony } );


// arreglos
const frutas = [ 'Manzana', 'Pera', 'Piña' ];


console.time( 'spread' ); // para medir el rendimiento de aplicaciones 
const otrasFrutas2 = [ ...frutas ];
console.timeEnd( 'spread' );

console.time( 'slice' )
const otrasFrutas = frutas.slice();
console.timeEnd('slice');


// formas de regresar un nuevo arreglo
// const otrasFrutas = [ ...frutas ];

otrasFrutas.push( 'Mango' );

console.table( { frutas, otrasFrutas } );