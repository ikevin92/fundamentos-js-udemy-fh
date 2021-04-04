

const kev = {
    nombre: 'Kevin',
    edad: 28,
    imprimir () {
        console.log( `Nombre: ${ this.nombre } -  edad: ${ this.edad }` );
    }
};

const marias = {
    nombre: 'Maria',
    edad: 50,
    imprimir () {
        console.log( `Nombre: ${ this.nombre } -  edad: ${ this.edad }` );
    }
};

// kev.imprimir();


function Persona ( nombre, edad ) {
    console.log( 'se ejecuto esta linea' );

    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = function () {
        console.log( `Nombre: ${ this.nombre } -  edad: ${ this.edad }` );
    };


}


const maria = new Persona( 'Maria', 18 ); // la palabra new quiere decir que se crea nueva instancia de Persona ( objeto)
const melissa = new Persona( 'Melissa', 35 ); // la palabra new quiere decir que se crea nueva instancia de Persona ( objeto)
console.log( maria );
maria.imprimir();
melissa.imprimir();