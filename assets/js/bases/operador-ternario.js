/**
 * dias de semana abrimos a las 11
 * los fines de semana abrimos a las 9
 */


// entra a un sitio web, para consultar si esta abierto
const dia = 1; // 0:domingo, 1:lunes
const horaActual = 10;


let horaApertura;
let mensaje; // Esta abierto, esta cerrado, hoy abrimos a las XX

// if ( dia === 0 || dia === 6 ) {
// if ( [ 0, 6 ].includes( dia ) ) { // simplifica el if de arriba

//     console.log( 'Fin de semana' );
//     horaApertura = 9;
// } else {
//     console.log( 'dia de la semana' );
//     horaApertura = 11;
// }

// ternario de la funcion de arriba
horaApertura = ( [ 0, 6 ].includes( dia ) ) ? 9 : 11;


// if ( horaActual >= horaApertura ) {
//     mensaje = 'Esta abierto';
// } else {
//     mensaje = `Esta cerrado, hoy abrimos a las ${ horaApertura }`;
// }

// ternario de la funcion de arriba
mensaje = ( horaActual >= horaApertura ) ? 'Esta abierto' : `Esta cerrado, hoy abrimos a las ${ horaApertura }`;

console.log( { horaApertura, mensaje } );
