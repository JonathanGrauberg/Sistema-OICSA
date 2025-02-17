import { Ciudad } from './Ciudad';

export class Obra{
    constructor(public id: number, public nombre: string, public ciudad:Ciudad, public estado: boolean, public fechaInicio: Date, public fechaFin: Date, public descripcion:string){}
}