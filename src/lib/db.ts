import pgPromise from 'pg-promise';

const pgp = pgPromise();

const connectionString = 'postgres://postgres:Gwebi7593@localhost:5432/oicsa_db';
const db = pgp(connectionString);



//prueba de la DB

(async () => {
    try {
      const result = await db.one('SELECT 1 AS value');
      console.log('Conexión exitosa:', result);
    } catch (error) {
      console.error('Error al conectar con la base de datos:', error);
    }
  })();
  
  export default db;