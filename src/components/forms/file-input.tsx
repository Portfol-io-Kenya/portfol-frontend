import Image from 'next/image';
import React, { useCallback, useEffect } from 'react'
import { useDropzone } from 'react-dropzone'
import { useFormContext } from 'react-hook-form';
import { BsUpload } from 'react-icons/bs';

interface FileInputProps {
  name: string;
  register?: any;
  watch?: any;
  setValue?: any;
  label?: any;
  onBlur?: any
  accept?: any
}

const FileInput = React.forwardRef<HTMLInputElement, FileInputProps>(({
    name,
    register,
    watch,
    setValue,
    label,
    onBlur,
    accept
}) => {
    const files = watch(name)

    const onDrop = useCallback(
        (droppedFiles: any) => {
            setValue(name, droppedFiles, {shouldValidate: true})
        },
        [setValue, name]
    )

    const {getRootProps, getInputProps, isDragActive} = useDropzone({
        maxFiles: 1,
        onDrop,
        accept: accept
    })


    return (
        <>
            {label && (
                <label
                    htmlFor={name}
                    className="block mb-3 text-sm font-semibold leading-none text-body-dark"
                >
                    {label}
                </label>
            )}
            <div {...getRootProps({
                className:
                    'mb-4 border-dashed border-2 border-border-base h-36 rounded flex flex-col justify-center items-center cursor-pointer focus:border-accent-400 focus:outline-none',
                })}
            >
                <input
                     {...getInputProps({
                        name,
                        onBlur,
                      })}
                    {...register(name)}
                    className=''
                    id={name}
                    {...getInputProps()}
                />
                <BsUpload className="text-muted-light" />
                <p className="mt-4 text-center text-sm text-body">
                {isDragActive ? (
                    <span className="font-semibold text-accent">
                        {"Drop files here"}
                    </span>):(
                        <span className="font-semibold text-accent">
                        {"Drag files here, or click to select"}
                    </span>
                )}
                <br />
                <span className="text-xs text-body">PNG, JPG, WEBP</span>
                </p>
                <div className="">
                    {/* optionally you may display a preview of the files  */}
                    {!!files?.length && (
                        <div className="">
                            {files.map((file: any) => {
                                return (
                                    <div className="mt-2 bg-gray-300 p-1 text-sm border border-gray-500" key={file.name}>
                                        {file.name}
                                        {/* <Image
                                            src={URL.createObjectURL(file)}
                                            alt=''
                                            width={100}
                                            height={100}
                                        /> */}
                                    </div>
                                )
                            })}
                        </div>
                    )}
                </div>
            </div>
        </>
        
  );
});
FileInput.displayName = 'FileInput';
export default FileInput;
