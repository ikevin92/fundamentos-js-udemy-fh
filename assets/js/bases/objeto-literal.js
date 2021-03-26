
// referencia  https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object


const personaje = {
    nombre: 'Tony Stark',
    codeName: 'IronMan',
    vivo: false,
    edad: 40,
    coords: {
        lat: 45.2,
        lon: -118.70
    },
    trajes: [ 'Mark I', 'Mark V', 'Hulkbuster' ],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu California'
    },
    'ultima-pelicula': 'Infinity War'
};

console.log( personaje );
console.log( 'Nombre', personaje.nombre );
console.log( 'Nombre', personaje[ 'nombre' ] );
console.log( 'Edad', personaje.edad );

console.log( 'Coors', personaje.coords );
console.log( 'Lat', personaje.lat );

console.log( 'No. Trajes', personaje.trajes.length );
console.log( 'Ultimo Traje:', personaje.trajes[ personaje.trajes.length - 1 ] );

const x = 'vivo';
console.log( 'Vivo', personaje[ x ] );

console.log( 'Ultima pelicula', personaje[ 'ultima-pelicula' ] );


// MAS DETALLES

// elimina una propiedad del objeto
delete personaje.edad;
console.log( personaje );

//agrega un nueva propiedad
personaje.casado = true;

// creamos el objeto como un arreglo
const entriePares = Object.entries( personaje );
console.log( entriePares );


// congela el objeto y no se pueden realizar ningun tipo de cambio
Object.freeze( personaje );

personaje.dinero = 1000000;
personaje.casado = true;
personaje.direccion.ubicacion = 'Panama';
console.log( personaje );

// guarda en un array las propiedades o valores del objeto
const propiedades = Object.getOwnPropertyNames( personaje );
const valores = Object.values( personaje );
console.log( { propiedades, valores } );