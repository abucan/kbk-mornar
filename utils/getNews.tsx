'use client';
import { Asset, createClient } from 'contentful';
import { useEffect, useState } from 'react';

const client = createClient({
  space: 't4mqgekwytfp',
  accessToken: 'wTg-nq2qoXA7G6Tr5JfpZocujR6MxgwVJp5Ftr9Ox-Y',
});

export const useFetchNews = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState<any>([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({
        content_type: 'kbkMornarNovosti',
      });
      const news = response.items.map((item) => {
        const { title, description, image, info } = item.fields;
        const id = item.sys.id;
        const img = (image as Asset)?.fields?.file?.url;

        return {
          title,
          description,
          img,
          id,
          info,
        };
      });
      setProjects(news);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { loading, projects };
};
