import { ArrowUpIcon } from "@radix-ui/react-icons";
import React from "react";
import { useDropzone } from "react-dropzone";

export interface FileUploadProps {
  onUpload: (file: File) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onUpload }) => {
  const [file, setFile] = React.useState<File | null>(null);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      setFile(acceptedFiles[0]);
      onUpload(acceptedFiles[0]);
    },
  });

  return (
    <div>
      <div className="flex flex-col items-center justify-center w-64 h-64 border-2 border-dashed border-gray-300 rounded-md hover:border-blue-500 relative">
        <div
          {...getRootProps()}
          className="flex flex-col items-center justify-center"
        >
          <input {...getInputProps()} />
          <span className="text-sm text-gray-500" data-testid="dropzone">Drag and drop file here</span>
          <span className="text-sm text-gray-500">Or</span>
          <div className="flex items-center mt-2 border-2 border-gray-300 rounded-md p-1 cursor-pointer">
            <span className="underline">
              <ArrowUpIcon />
            </span>
            <span className="text-sm text-gray-500">Upload File</span>
          </div>
          {file && (
            <span className="mt-2 text-sm text-gray-500">{file.name}</span>
          )}
        </div>
      </div>
      <span className="mt-2 text-xs text-gray-500 self-start">
        Files should be in excel format
      </span>
    </div>
  );
};

export default FileUpload;
