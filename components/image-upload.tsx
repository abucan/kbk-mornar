import { storage } from '@/appwrite/config';
import { cn } from '@/lib/utils';
import { ID } from 'appwrite';
import { UploadCloud } from 'lucide-react';
import { Dispatch, SetStateAction, useState } from 'react';
import ImageUploading, { ImageListType } from 'react-images-uploading';
import { Button } from './ui/button';

interface ImageUploadProps {
  image?: string;
  setImage: Dispatch<SetStateAction<string>>;
  setStep: Dispatch<
    SetStateAction<{
      stepsItems: string[];
      currentStep: number;
    }>
  >;
  setImgPreview: Dispatch<SetStateAction<string>>;
}

export const ImageUpload = ({
  image,
  setImage,
  setStep,
  setImgPreview,
}: ImageUploadProps) => {
  const [images, setImages] = useState([]);
  const maxNumber = 10;

  const onChange = async (imageList: ImageListType) => {
    const response = await storage.createFile(
      process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID!,
      ID.unique(),
      imageList[0].file as File
    );
    setImage(response.$id);
    setImages(imageList as never[]);
    setImgPreview(imageList[0]?.dataURL as string);
  };

  return (
    <div className='App'>
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
      >
        {({
          imageList,
          onImageUpload,
          onImageUpdate,
          isDragging,
          dragProps,
        }) => (
          <div
            className={cn(
              'max-w-md h-40 rounded-lg border-2 border-dashed flex items-center justify-center',
              image && 'border-none'
            )}
          >
            {!image && (
              <button
                className='cursor-pointer text-center p-4 md:p-8'
                style={isDragging ? { color: 'red' } : undefined}
                onClick={onImageUpload}
                {...dragProps}
              >
                <UploadCloud className='mx-auto w-10 h-10' />
                <p className='mt-3 text-gray-700 max-w-xs mx-auto'>
                  Click to{' '}
                  <span className='font-medium text-indigo-600'>
                    Upload your file
                  </span>{' '}
                  or drag and drop your file here
                </p>
              </button>
            )}
            {imageList.map((image, index) => (
              <div
                key={index}
                className='flex flex-col space-y-4 items-center justify-center mt-16'
              >
                <img
                  src={image.dataURL}
                  alt=''
                  className='w-full max-w-md h-60'
                />
                <div className='flex flex-row space-x-4 w-full'>
                  <Button
                    onClick={() => onImageUpdate(index)}
                    variant={'destructive'}
                    className='w-full'
                  >
                    Promjeni sliku
                  </Button>
                  <Button
                    className='w-full'
                    onClick={() =>
                      setStep((prev) => ({ ...prev, currentStep: 2 }))
                    }
                    variant={'outline'}
                  >
                    Nastavi
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </div>
  );
};
