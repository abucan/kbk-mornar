'use client';
import db from '@/appwrite/databases';
import { useEffect, useState } from 'react';

export const usePosts = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<any>([]);

  const getPosts = async () => {
    try {
      const response = await db.tasks.listFiles();
      setPosts(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return { loading, posts };
};
