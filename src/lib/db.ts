import dotenv from 'dotenv';
import { Pool } from 'pg';

console.log('🟢 db.ts se está ejecutando...');

dotenv.config();

// Verificar si las variables se están cargando correctamente
console.log(`🔵 DB_URL: ${process.env.DB_URL}`);
console.log(`🔵 DB_USER: ${process.env.DB_USER}`);
console.log(`🔵 DB_HOST: ${process.env.DB_HOST}`);
console.log(`🔵 DB_NAME: ${process.env.DB_NAME}`);

const pool = new Pool({ connectionString: process.env.DB_URL });

pool.connect()
    .then(() => console.log('✅ Conexión a la base de datos establecida'))
    .catch(err => console.error('❌ Error al conectar con la base de datos:', err));

export const query = (text: string, params?: any[]) => pool.query(text, params);
export default pool;
