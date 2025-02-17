
import usuarioRepository from '../repository/UsuarioRepository';

export async function getAllUsuarios(){
    console.log('Llamando a getAllUsuarios...');
    const allUsers = await usuarioRepository.getAllUsuarios();
    console.log('Se recuperaron '+allUsers.length + ' usuarios');
}
