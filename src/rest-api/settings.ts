import { getPreviewImage } from "@/lib/get-preview-image";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { FileWithPath } from "react-dropzone";
import client from "./client";

export const useUploads = ({ onChange, defaultFiles }: any) => {
    const [files, setFiles] = useState<FileWithPath[]>(
      getPreviewImage(defaultFiles)
    );

    const { mutate: upload, isPending } = useMutation({
        mutationFn: client.settings.upload,
        onSuccess: (data) => {
            if (onChange) {
              const dataAfterRemoveTypename = data?.map(
                ({ __typename, ...rest }: any) => rest
              );
              onChange(dataAfterRemoveTypename);
              setFiles(getPreviewImage(dataAfterRemoveTypename));
            }
          }
    });
          
  
    function handleSubmit(data: File[]) {
      upload(data);
    }
  
    return { mutate: handleSubmit, isPending, files };
  };