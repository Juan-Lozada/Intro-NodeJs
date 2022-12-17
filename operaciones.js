const fs = require('fs');

const registrar = (petName, petAge, petType, petColor, petIllnes) => {
    try {

        let object = {
            nombre: petName,
            edad: petAge,
            tipo: petType,
            color: petColor,
            enfermedad: petIllnes
        }

        let file = JSON.parse(fs.readFileSync('citas.json'))
        file.push(object)
        fs.writeFileSync('citas.json', JSON.stringify(file, null, ' '))
        console.log('Registrado de manera exitosa')
    } catch (err) {
        return err;
    }
}

const leer = () =>  {
    const content = fs.readFileSync('citas.json', 'utf-8')
    const leerCitas = JSON.parse(content)
    
    if (leerCitas === 0) {
        console.log('Aun no hay niguna cita agendada')
    } 

    else {
        leerCitas.map((cita)=>{
            for (let i = 0; i < Object.keys(leerCitas[0]).length; i++) {
                console.log(Object.keys(cita)[i] + ': ', Object.values(cita)[i])
                
            }
        })

        console.log(`el total de citas es de: ${leerCitas.length}`)
    }
}

module.exports = {
    registrar,
    leer
}