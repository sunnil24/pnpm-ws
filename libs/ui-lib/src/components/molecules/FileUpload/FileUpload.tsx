import React from "react";
import { useDropzone } from "react-dropzone";
import ExcelFileIcon from "./ExcelFileIcon";
import { UploadIcon } from "@radix-ui/react-icons";

export interface FileUploadProps {
  onUpload: (file: File) => void;
  uploadText?: string;
  fileFormatText?: string;
  dragText?: string;
  className?: string;
}

const FileUpload: React.FC<FileUploadProps> = ({
  dragText,
  fileFormatText,
  onUpload,
  uploadText,
  className,
}) => {
  const [file, setFile] = React.useState<File | null>(null);
  const { getInputProps, getRootProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      const file1 = acceptedFiles[0];
      setFile(file1);
      onUpload(file1);
    },
  });

  return (
    <>
      <div
        {...getRootProps()}
        className={`flex flex-col items-center justify-center h-136 p-16 gap-3 border border-dashed border-gray-400 bg-basics-grey20 w-full ${className}`}
      >
        <div className="flex flex-col items-center justify-center">
          <input {...getInputProps({ accept: ".xls,.xlsx,.csv" })} />
          {file ? (
            <div className="flex gap-2">
              <ExcelFileIcon />
              <span className="mt-2 text-sm text-gray-500">{file.name}</span>
            </div>
          ) : (
            <>
              <div className="flex h-8 px-3 justify-center items-center gap-2 flex-shrink-0 rounded-md border border-gray-300">
                <span className="underline">
                  <UploadIcon />
                </span>
                <span className="text-black text-base font-normal leading-relaxed">
                  {uploadText}
                </span>
              </div>
              <span className="text-sm text-gray-500" data-testid="dropzone">
                {dragText}
              </span>
            </>
          )}
        </div>
      </div>
      <span className="mt-0 text-xs text-gray-500 self-start">
        {fileFormatText}
      </span>
    </>
  );
};

export default FileUpload;
