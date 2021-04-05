


class Persona {

    // metodo estatico
    static porObjeto ( { nombre, apellido, pais } ) {
        return new Persona( nombre, apellido, pais );
    }


    constructor ( nombre, apellido, pais ) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    }

    getInfo () {
        console.log( `info: ${ this.nombre }, ${ this.apellido }, ${ this.pais }` );
    }
}

const nombre1 = 'Kevin', apellido1 = 'Echeverri', pais1 = 'Colombia';

const maria = {
    nombre: 'Maria',
    apellido: 'Loboa',
    pais: 'España'
};


const persona1 = new Persona( nombre1, apellido1, pais1 );
const persona2 = Persona.porObjeto( maria );

persona1.getInfo();
persona2.getInfo();