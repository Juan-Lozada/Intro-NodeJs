const { registrar, leer } = require('./operaciones.js');

const argumentos = process.argv.slice(2);

const petName = argumentos[1];
const petAge = argumentos[2];
const petType = argumentos[3];
const petColor = argumentos[4];
const petIllnes = argumentos[5];

if (argumentos[0] !== 'registrar' && argumentos[0] !== 'leer' ) {
    console.log("Por favor, ingrese la funcion: registrar o leer." )
    return
}

else if (argumentos[0] === 'registrar' && argumentos.length === 6) {

    if (isNaN(petAge)){
        console.log('porfavor. introduzca un valor numerico ')
    } else {
        registrar(petName, petAge, petType, petColor, petIllnes);
        console.log('Cita correctamente agendada')
    }

}
else if (argumentos[0] === 'registrar' && argumentos.length === 6) {

    if (petName === undefined){
        console.log('porfavor. introduzca el nombre de la mascota')
    } else {
        registrar(petName, petAge, petType, petColor, petIllnes);
        console.log('Cita correctamente agendada')
    }

}
else if (argumentos[0] === 'registrar' && argumentos.length === 6) {

    if (petType === undefined){
        console.log('porfavor. introduzca el tipo de mascota ')
    } else {
        registrar(petName, petAge, petType, petColor, petIllnes);
        console.log('Cita correctamente agendada')
    }

}
else if (argumentos[0] === 'registrar' && argumentos.length === 6) {

    if (petColor === undefined){
        console.log('porfavor. introduzca el color de la mascota ')
    } else {
        registrar(petName, petAge, petType, petColor, petIllnes);
        console.log('Cita correctamente agendada')
    }

} 
else if (argumentos[0] === 'registrar' && argumentos.length === 6) {

    if (petIllnes === undefined){
        console.log('porfavor. introduzca la enfermedad de la mascota ')
    } else {
        registrar(petName, petAge, petType, petColor, petIllnes);
        console.log('Cita correctamente agendada')
    }

}


else if (argumentos[0].toLocaleLowerCase() === "registrar") {
    registrar(petName, petAge, petType, petColor, petIllnes);
    console.log('Cita correctamente agendada')

    
}

else if (argumentos[0].toLocaleLowerCase() === "leer"){
    leer();


}

else {
    console.log('Ha ocurrido un error. porfavor, intente de nuevo')
}