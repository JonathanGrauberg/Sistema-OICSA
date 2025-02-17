import { Rol } from './Rol';
import { Empleado } from './Empleado';

export class Usuario {
constructor(public id: number, public username: string, public empleado:Empleado, public password: string, public activo: boolean, public rol:Rol, public email: string){}  
}