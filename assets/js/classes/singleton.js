// singleton:

class Singleton {


    static instancia; // undefined

    nombre = ''; // opcional

    constructor ( nombre = '' ) {

        // console.log( Singleton.instancia );

        if ( !!Singleton.instancia ) { // si es falso 
            return Singleton.instancia;
        }


        Singleton.instancia = this;
        this.nombre = nombre;


    }
}

const instancia1 = new Singleton( 'Ironman' );
const instancia2 = new Singleton( 'Spiderman' );
const instancia3 = new Singleton( 'Thor' );

console.log( `Nombre en la instancia 1 es: ${ instancia1.nombre }` );
console.log( `Nombre en la instancia 2 es: ${ instancia2.nombre }` );
console.log( `Nombre en la instancia 3 es: ${ instancia3.nombre }` );