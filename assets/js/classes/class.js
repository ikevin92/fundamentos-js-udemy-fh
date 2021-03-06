

class Persona {

    static _conteo = 0;
    static get conteo () {
        return Persona._conteo + ' instancias';
    }

    static mensaje () {
        console.log( this.nombre );  //undefined
        console.log( 'Hola soy un metodo estatico MENSAJE!!' );
    }

    // usestric ya viene por defecto en las clases
    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    constructor ( nombre = 'sin nombre', codigo = 'sin codigo', frase = 'sin frase' ) { // siempre retorna la instancia del objeto

        // if ( !nombre ) throw Error( 'Necesitamos el nombre' );
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        Persona._conteo++; // contamos las instancias
    }

    //setters y getters
    /**
     * @param {string} comida
     */
    set setComidaFavorita ( comida ) { // set solor recibe un argumento
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita () {
        return `La comida favorita de ${ this.nombre } es ${ this.comida }`;
    }

    // metodos
    quienSoy () {
        console.log( `Soy ${ this.nombre } y mi identidad es ${ this.codigo }` );
    }

    miFrase () {
        this.quienSoy();// se llama la funcion dentro de otra funcion
        console.log( `${ this.codigo } dice: ${ this.frase }` );
    }

}


// instancia de las clases
const spiderman = new Persona( 'Peter Parker', 'Spiderman', 'Soy tu vecino amigable' );
const ironman = new Persona( 'Tony Stark', 'Ironman', 'Soy millonario' );



// console.log( ironman );


spiderman.quienSoy();
// ironman.quienSoy();

spiderman.miFrase();
// ironman.miFrase();

// implementacion del set
spiderman.setComidaFavorita = 'El pie de cereza de la tia May';
spiderman.nemesis = 'Duende verde';

// console.log( spiderman.getComidaFavorita );
// console.log( spiderman );

// Persona._conteo = 2;
console.log( 'Conteo estatico', Persona._conteo );
console.log( Persona.conteo );
Persona.mensaje();

// asignar propiedad estatica externa
Persona.propiedadExterna = 'Hola propiedad estatica externa';
console.log( Persona.propiedadExterna );
console.log( Persona );