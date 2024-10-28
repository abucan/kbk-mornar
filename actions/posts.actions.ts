'use server';
import { parseStringify } from '@/lib/utils';
import db from '@/appwrite/databases';

export const getPosts = async () => {
  try {
    const response = await db.tasks.listFiles();
    console.log(response);

    return parseStringify(response);
  } catch (error) {
    console.log(error);
  }
};
