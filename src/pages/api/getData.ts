import type { NextApiRequest, NextApiResponse } from 'next';
import db from '../../../src/lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const data = await db.any('SELECT * FROM oicsa_db'); 
    res.status(200).json(data);
  } catch (error) {
    console.error('Error al obtener datos:', error);
    res.status(500).json({ error: 'Error al obtener datos' });
  }
}
