import { Sexo } from "./Sexo"

export type CurpValidationRequest = {
    curp: string,
    nombres: string,
    apellidoPaterno: string,
    apellidoMaterno: string,
    fechaNacimiento: string,
    sexo: Sexo,
    esMexicano: boolean
}