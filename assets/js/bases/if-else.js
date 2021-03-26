

let a = 10;

if ( a >= 10 ) {
    console.log( 'A es mayor o igual a 10' );
} else {
    console.log( 'A es menor a 10' );
}


// console.log( 'fin de programa' );

const hoy = new Date(); // {}
let dia = hoy.getDay(); // 0 es domingo 

console.log( { hoy } );
console.log( { dia } );

console.log( 5 == '5' );
console.log( 5 === '5' );


if ( dia === 0 ) {
    console.log( 'Domingo' );
}
else if ( dia === 1 ) {
    console.log( 'Lunes' );
    // if ( dia === 1 ) {
    //     console.log( 'Es lunes' );
    // } else {
    //     console.log( 'No es Lunes ni es domingo' );
    // }

}
else if ( dia === 2 ) {
    console.log( 'Martes' );
} else {
    console.log( 'No es lunes ni domingo ni martes' );
}



// sin usar if else, o switch, unicamente objetos
dia = 4; // domingo es 0, lunes es 1 ...

const diasLetras = {
    0: 'domingo',
    1: 'lunes',
    2: 'martes',
    3: 'miercoles',
    4: 'jueves',
    5: 'viernes',
    6: 'sabado',
};

const diasLetras2 = [
    'domingo',
    'lunes',
    'martes',
    'miercoles',
    'jueves',
    'viernes',
    'sabado',
];
// imprimir en consola el dia de la semana
console.log( diasLetras[ dia ] || 'Dia no es valido' );
console.log( diasLetras2[ dia ] || 'Dia no es valido' );

