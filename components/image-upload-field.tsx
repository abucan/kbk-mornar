import { useFormContext } from 'react-hook-form';
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from './ui/form';
import { Input } from './ui/input';
import { UploadCloud } from 'lucide-react';

interface ImageUploadFieldProps {
  name: string;
  placeholder: string;
  label: string;
  handleUpload: (e: any) => void;
  value?: string;
}

export const ImageUploadFormField = ({
  name,
  label,
  placeholder,
  handleUpload,
  value,
}: ImageUploadFieldProps) => {
  const { control } = useFormContext();
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <div className='max-w-md h-40 rounded-lg border-2 border-dashed flex items-center justify-center'>
              {value === '' && (
                <label
                  htmlFor='file'
                  className='cursor-pointer text-center p-4 md:p-8'
                >
                  <UploadCloud className='mx-auto w-10 h-10' />
                  <p className='mt-3 text-gray-700 max-w-xs mx-auto'>
                    Click to{' '}
                    <span className='font-medium text-indigo-600'>
                      Upload your file
                    </span>{' '}
                    or drag and drop your file here
                  </p>
                </label>
              )}
              <Input
                id='file'
                placeholder={placeholder}
                {...field}
                type='file'
                className={`${value ? 'block' : 'hidden'}`}
                onChange={handleUpload}
              />
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
