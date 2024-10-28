'use server';
import { parseStringify } from '@/lib/utils';
import { connectToDatabase } from '@/lib/db';
import { writeFile } from 'fs/promises';
import path from 'path';

export const getPostsFromDB = async () => {
  const db2 = await connectToDatabase();
  try {
    const [rows] = await db2.query('SELECT * FROM posts');
    return parseStringify(rows);
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch posts');
  }
};
