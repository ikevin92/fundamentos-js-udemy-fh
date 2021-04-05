
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


class Heroe extends Persona {

    clan = 'sin clan';

    constructor ( nombre, codigo, frase ) {
        super( nombre, codigo, frase ); // se debe poner cuando es herencia

        this.clan = 'Avengers'; // los this deben ser siempre despues de el constructor
    }

    // sobrescribir metodo
    quienSoy () {

        console.log( `Soy ${ this.nombre }, ${ this.clan }` );
        super.quienSoy();// se llama al metodo de la clase padre
    }

}


// instancia de las clases
const spiderman = new Heroe( 'Peter Parker', 'Spiderman', 'Soy tu vecino amigable' );
// const spiderman = new Heroe();

console.log( spiderman );
spiderman.quienSoy();


