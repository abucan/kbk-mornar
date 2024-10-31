'use server';
import { connectToDatabase } from '@/lib/db';
import { parseStringify } from '@/lib/utils';

export const getTrainersFromDB = async () => {
  const db2 = await connectToDatabase();
  try {
    const [rows] = await db2.query('SELECT * FROM trainers');
    return parseStringify(rows);
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch posts');
  }
};
