import { CurpValidationRequest } from "lib/objects/CurpValidationRequest";
import { Sexo } from "lib/objects/Sexo";

export const curpValidation = (data: CurpValidationRequest) => {
    console.log(data)
    var errors: string[] = []
    validateName(data.nombres, data.apellidoPaterno, data.apellidoMaterno, data.curp, errors)
    validateDate(data.fechaNacimiento, data.curp, errors)
    validateGender(data.sexo, data.curp, errors)
    validateMexican(data.esMexicano, data.curp, errors)

    if (errors.length > 0) {
        alert('Hay errores en los siguientes campos: ' + errors.join(', '))
    } else {
        alert ('Los datos corresponden correctamente')
    }
}

const validateName = (name: string, aPaterno: string, aMaterno: string, curp: string, errors: string[] ) => {
    if (noBlanks(aPaterno)[0] !== curp[0] || noConsonants(aPaterno)[0] !== curp[1] || noVocals(aPaterno)[1] !== curp[13])
        errors.push('Apellido Paterno')

    if (noBlanks(aMaterno)[0] !== curp[2] || noVocals(aMaterno)[1] !== curp[14])
        errors.push('Apellido Materno')
    
    if (noBlanks(name)[0] !== curp[3] || noVocals(name)[1] !== curp[15])
        errors.push('Nombre')
}

const validateDate = (birthday: string, curp: string, errors: string[]) => {
    /*La siguiente parte de la función solamente se usa para ejemplo 
    en el caso de que la fecha se encuentre en formato ISO*/
    const date: Date = new Date(birthday)
    const isoDate: string = date.toISOString() //Se tranforma la fecha a formato ISO: 2000-01-01T00:00:00.000Z
    /*fin del ejemplo*/

    const stringDate: Date = new Date(isoDate)
    const year: number = stringDate.getUTCFullYear();
    const month: number = stringDate.getUTCMonth() + 1;
    const day: number = stringDate.getUTCDate();

    const dateJoin: string = `${String(year).slice(-2)}${String(month).padStart(2, '0')}${String(day).padStart(2, '0')}`
    if (dateJoin !== curp.substring(4, 10))
        errors.push('Fecha de Nacimiento')
}

const validateGender = (gender: Sexo, curp: string, errors: string[]) => {
    const curpGender = curp[10]
    const intGender = parseInt(gender.toString())
    const expectedGender = intGender === Sexo.Masculino ? 'H' : 'M'

    if (curpGender !== expectedGender) {
        errors.push('Sexo')
    }
}

const validateMexican = (isMexican: boolean, curp: string, errors: string[]) => {
    if (isMexican === false && curp.substring(11, 13) !== 'NE')
        errors.push('Es Mexicano')
}

const noBlanks = (name: string) => { return name.replace(/ /g, "").toString().toUpperCase() }
const noVocals = (name: string) => { return  name.replace(/[aeiou ]/gi, "").toString().toUpperCase() }
const noConsonants = (name: string) => { return name.replace(/[bcdfghjklmnpqrstvwxyz ]/gi, "").toString().toUpperCase() }