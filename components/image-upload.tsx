import { storage } from '@/appwrite/config';
import { ID } from 'appwrite';
import { UploadCloud } from 'lucide-react';
import { Dispatch, SetStateAction, useState } from 'react';
import ImageUploading, { ImageListType } from 'react-images-uploading';

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
    setStep((prev) => ({ ...prev, currentStep: 2 }));
    setImages(imageList as never[]);
    setImgPreview(imageList[0]?.dataURL as string);
  };

  return (
    <div className='App'>
      <ImageUploading
        multiple={false}
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          <div className='max-w-md h-40 rounded-lg border-2 border-dashed flex items-center justify-center'>
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
              <div key={index} className='image-item'>
                <img src={image.dataURL} alt='' width='100' />
                <div className='image-item__btn-wrapper'>
                  <button onClick={() => onImageUpdate(index)}>Update</button>
                  <button onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </div>
  );
};
