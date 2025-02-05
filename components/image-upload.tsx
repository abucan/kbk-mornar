'use client';
import { UploadButton } from '@/utils/uploadthing';

export const ImageUpload = ({ setImage, setStep }: ImageUploadProps) => {
  return (
    <div>
      <UploadButton
        endpoint='imageUploader'
        onClientUploadComplete={(res) => {
          setImage(res[0].url);
          setStep((prev: any) => ({ ...prev, currentStep: 2 }));
        }}
        onUploadError={(error: Error) => {
          alert(`ERROR! ${error.message}`);
        }}
      />
    </div>
  );
};
