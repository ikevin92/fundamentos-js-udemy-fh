

function creatPersona ( nombre, apellido ) {


    return {
        nombre,
        apellido
    };

}


const persona = creatPersona( 'Kevin', 'Echeverri' );
console.log( persona );