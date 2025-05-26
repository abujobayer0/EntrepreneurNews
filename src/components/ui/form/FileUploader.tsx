"use client";

import { Clock, File } from "lucide-react";
import React, { useState } from "react";

// Define the interface for the selected file
interface SelectedFile {
  uri: string;
  type: string;
  name: string;
}

// Define the props interface
interface FileUploaderProps {
  label: string;
  onFileSelected: (file: SelectedFile | null) => void;
  maxSize?: number;
  allowedTypes?: string[];
  error?: string;
}

const FileUploader: React.FC<FileUploaderProps> = ({
  label,
  onFileSelected,
  maxSize,
  allowedTypes = ["*/*"],
  error,
}) => {
  const [fileName, setFileName] = useState<string | null>(null);

  const pickDocument = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Check file size
    if (maxSize && file.size > maxSize) {
      const maxSizeMB = maxSize / (1024 * 1024);
      alert(`ফাইল সাইজ ${maxSizeMB}MB এর বেশি হতে পারবে না`);
      return;
    }

    // Check file type
    if (allowedTypes[0] !== "*/*" && !allowedTypes.includes(file.type)) {
      alert("অনুমোদিত ফাইল টাইপ নয়");
      return;
    }

    setFileName(file.name);
    onFileSelected({
      uri: URL.createObjectURL(file),
      type: file.type,
      name: file.name,
    });

    // Optional: Integrate Cloudinary Upload Widget here
    // const uploadWidget = window.cloudinary.createUploadWidget(
    //   { cloudName: 'YOUR_CLOUD_NAME', uploadPreset: 'YOUR_UPLOAD_PRESET' },
    //   (error, result) => {
    //     if (!error && result && result.event === 'success') {
    //       onFileSelected({ uri: result.info.secure_url, type: file.type, name: file.name });
    //     }
    //   }
    // );
    // uploadWidget.open();
  };

  const removeFile = () => {
    setFileName(null);
    onFileSelected(null);
  };

  return (
    <div className="mb-4">
      <p className="mb-1.5 text-sm font-medium text-gray-600">*{label}</p>

      {fileName ? (
        <div className="flex items-center p-3 bg-gray-50 border border-gray-300 rounded-md h-10">
          <File size={24} color="#6b7280" />
          <p
            className="flex-1 text-gray-700 ml-2 mr-2 overflow-hidden text-ellipsis whitespace-nowrap"
            title={fileName}
          >
            {fileName}
          </p>
          <button onClick={removeFile}>
            <Clock size={20} color="#6b7280" />
          </button>
        </div>
      ) : (
        <label className="flex items-center justify-between p-1.75 border border-gray-300 rounded-md bg-white cursor-pointer">
          <p className="text-gray-600 font-medium ml-2">ফাইল আপলোড করুন</p>
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.5 12.201V14.7452C4.5 17.9902 4.5 19.6128 5.38607 20.7118C5.56508 20.9338 5.76731 21.1359 5.98933 21.3149C7.08831 22.201 8.71082 22.201 11.9558 22.201C12.6614 22.201 13.0141 22.201 13.3372 22.087C13.4044 22.0633 13.4702 22.0361 13.5345 22.0054C13.8436 21.8575 14.093 21.608 14.5919 21.1091L19.3284 16.3727C19.9065 15.7946 20.1955 15.5055 20.3478 15.1379C20.5 14.7704 20.5 14.3616 20.5 13.5441V10.201C20.5 6.42981 20.5 4.5442 19.3284 3.37262C18.1569 2.20105 16.2712 2.20105 12.5 2.20105M13.5 21.701V21.201C13.5 18.3726 13.5 16.9585 14.3787 16.0798C15.2574 15.2011 16.6716 15.201 19.5 15.201H20"
              stroke="#6B6C76"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.5 5.20105C9.91016 4.59421 8.34027 2.20105 7.5 2.20105C6.65973 2.20105 5.08984 4.59421 4.5 5.20105M7.5 3.20105V10.201"
              stroke="#6B6C76"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <input
            type="file"
            accept={allowedTypes.join(",")}
            onChange={pickDocument}
            className="hidden"
          />
        </label>
      )}

      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default FileUploader;
