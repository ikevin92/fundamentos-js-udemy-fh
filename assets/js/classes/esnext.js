// CLASE DE PROPIEDADES PRIVADAS
// aun no es oficial


class Rectangulo {

    #area = 0; // con el # se indica como privada 

    constructor ( base = 0, altura = 0 ) {
        this.base = base;
        this.altura = altura;

        this.#area = base * altura;
    }


    calculaArea () {
        console.log( this.#area * 2 );
    }
    
}


const rectangulo = new Rectangulo( 10, 15 );
// rectangulo.#area = 100;
rectangulo.calculaArea();

console.log( rectangulo );


// link de implementacion de campos privados
//https://caniuse.com/mdn-javascript_classes_private_class_fields