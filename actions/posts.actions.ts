'use server';
import { parseStringify } from '@/lib/utils';
import { connectToDatabase } from '@/lib/db';

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

export const createPost = async (payload: CreatePostProps) => {
  const db2 = await connectToDatabase();
  try {
    const [rows] = await db2.query(
      'INSERT INTO posts (title, description, imageUrl) VALUES (?, ?, ?)',
      [payload.title, payload.description, payload.imageUrl]
    );
    return parseStringify(rows);
  } catch (error) {
    console.log(error);
    throw new Error('Failed to create post');
  }
};
