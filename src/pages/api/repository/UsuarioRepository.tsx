import { query } from "../../../lib/db";
console.log('🟢 usuarioRepository.tsx se está ejecutando...');

class UsuarioRepository{
    async getAllUsuarios(){
        const res= await query('SELECT * FROM usuario');
        return res.rows;
    }
}


export default new UsuarioRepository();