import { ID } from 'appwrite';
import { databases, storage } from './config';

const collections = [
  {
    dbId: process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
    id: process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID_POSTS!,
    name: 'tasks',
  },
];

const db: { [key: string]: any } = {};

type DocumentData = {
  [key: string]: any;
};

collections.forEach((col) => {
  db[col.name] = {
    create: async (
      payload: DocumentData,
      permissions: string[] = [],
      id: string = ID.unique()
    ) => {
      return await databases.createDocument(
        col.dbId,
        col.id,
        id,
        payload,
        permissions
      );
    },
    update: async (
      id: string,
      payload: DocumentData,
      permissions: string[] = []
    ) => {
      return await databases.updateDocument(
        col.dbId,
        col.id,
        id,
        payload,
        permissions
      );
    },
    delete: async (id: string) => {
      return await databases.deleteDocument(col.dbId, col.id, id);
    },
    list: async (queries: string[] = []) => {
      return await databases.listDocuments(col.dbId, col.id, queries);
    },
    get: async (id: string) => {
      return await databases.getDocument(col.dbId, col.id, id);
    },
    listFiles: async (queries: string[] = []) => {
      try {
        const documents = await databases.listDocuments(
          col.dbId,
          col.id,
          queries
        );

        if (documents.documents.length === 0) {
          console.log('No documents found.');
          return;
        }

        const files = await Promise.all(
          documents.documents.map(async (document) => {
            try {
              const imageFile = await storage.getFilePreview(
                process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID!,
                document.imageUrl
              );
              return {
                ...document,
                imageFile,
              };
            } catch (imageError) {
              console.error(
                'Error retrieving image for document:',
                document,
                imageError
              );
              return {
                ...document,
                imageFile: null,
                imageError,
              };
            }
          })
        );
        return files;
      } catch (error) {
        console.error('Error retrieving documents or images:', error);
      }
    },
  };
});

export default db;
