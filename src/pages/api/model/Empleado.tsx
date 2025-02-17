import { Persona } from './Persona';
import { EstadoEmpleado } from './EstadoEmpleado';
import { Cargo } from './Cargo';

export class Empleado{
    constructor(public id: number, public persona:Persona, public estadoEmpleado:EstadoEmpleado, public cargo:Cargo, public fechaAlta: Date, public fechaBaja:Date){} 

}