import React from "react";
import { useDropzone } from "react-dropzone";
import ExcelFileIcon from "./ExcelFileIcon";
import { CrossCircledIcon, UploadIcon } from "@radix-ui/react-icons";

export interface FileUploadProps {
  onUpload: (file: File) => void;
  uploadText?: string;
  fileFormatText?: string;
  dragText?: string;
  className?: string;
  onCancel?: () => void;
}

const FileUpload: React.FC<FileUploadProps> = ({
  dragText,
  fileFormatText,
  onUpload,
  uploadText,
  className,
  onCancel,
}) => {
  const [file, setFile] = React.useState<File | null>(null);
  const { getInputProps, getRootProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      const file1 = acceptedFiles[0];
      setFile(file1);
      onUpload(file1);
    },
    accept: {
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [
        ".xlsx",
      ],
    },
    multiple: false,
    disabled: !!file, // Disable dropzone if file is already selected
    noClick: !!file, // Prevent file dialog from opening if file is already selected
  });

  const handleRevert = () => {
    setFile(null);
    if (onCancel) {
      onCancel();
    }
  };

  return (
    <>
      <div
        {...getRootProps()}
        className={`flex flex-col items-center justify-center p-16 gap-3 border border-dashed border-basics-grey40 bg-basics-grey10 w-full ${className}`}
      >
        <div className="flex flex-col items-center justify-center">
          <input {...getInputProps()} />
          {file ? (
            <div className="flex items-center justify-between w-full">
              <div className="flex gap-2">
                <ExcelFileIcon />
                <span className="mt-2 text-sm">{file.name}</span>
              </div>
              <button onClick={handleRevert}>
                <CrossCircledIcon className="h-6 w-6 ml-2 mb-1" />
              </button>
            </div>
          ) : (
            <>
              <div className="flex cursor-pointer h-8 px-3 justify-center items-center gap-2 flex-shrink-0 rounded-md border border-basics-grey100">
                <span className="underline">
                  <UploadIcon />
                </span>
                <span className="text-para-primary text-base font-normal leading-relaxed">
                  {uploadText}
                </span>
              </div>
              <span className="text-sm mt-2" data-testid="dropzone">
                {dragText}
              </span>
            </>
          )}
        </div>
      </div>
      <span className="mt-0 text-xs text-para-primary self-start">
        {fileFormatText}
      </span>
    </>
  );
};

export default FileUpload;
