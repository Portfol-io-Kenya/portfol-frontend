import { useUploads } from '@/rest-api/settings';
import { useEffect, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { BsUpload } from 'react-icons/bs';

export default function Uploader({
  onChange,
  value,
  name,
  onBlur,
  multiple = false,
}: any) {
  const {
    mutate: upload,
    isPending,
    files,
  } = useUploads({
    onChange,
    defaultFiles: value,
  });

  const onDrop = useCallback(
    (acceptedFiles: any) => {
      upload(acceptedFiles);
    },
    [upload]
  );
  const { getRootProps, getInputProps } = useDropzone({
    accept: {'image/*': ['.jpeg', '.png']},
    multiple: false,
    onDrop,
  });
  
  const thumbs = files.map((file: any, idx: any) => (
    <div
      className="relative mt-2 inline-flex flex-col overflow-hidden rounded border border-border-100 ltr:mr-2 rtl:ml-2"
      key={idx}
    >
      <div className="flex h-16 w-16 min-w-0 items-center justify-center overflow-hidden">
        {/* eslint-disable */}
        <img src={file.preview} alt={file?.name} />
      </div>
    </div>
  ));
  //FIXME: maybe no need to use this
  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file: any) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  return (
    <section className="upload">
      <div
        {...getRootProps({
          className:
            'border-dashed border-2 border-border-base h-36 rounded flex flex-col justify-center items-center cursor-pointer focus:border-accent-400 focus:outline-none',
        })}
      >
        <input
          {...getInputProps({
            name,
            onBlur,
          })}
        />
        <BsUpload className="text-muted-light" />
        <p className="mt-4 text-center text-sm text-body">
          <span className="font-semibold text-accent">
            {('text-upload-highlight')}
          </span>{' '}
          {('text-upload-message')} <br />
          <span className="text-xs text-body">{('text-img-format')}</span>
        </p>
      </div>

      <aside className="mt-2 flex flex-wrap">
        {!!thumbs.length && thumbs}
        {isPending && (
          <div className="mt-2 flex h-16 items-center ltr:ml-2 rtl:mr-2">
            loading...
          </div>
        )}
      </aside>
    </section>
  );
}
