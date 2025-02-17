import { Provincia } from './Provincia';

export class Ciudad{
    constructor(public id: number, public nombre: string, public provincia:Provincia, public codigo_postal: number){}
}