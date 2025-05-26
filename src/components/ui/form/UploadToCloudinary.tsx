/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import React, { useState } from "react";
import { MdCloudUpload, MdDelete } from "react-icons/md";

interface CloudinaryConfig {
  cloudName: string;
  uploadPreset: string;
  apiKey?: string;
}

interface UploadToCloudinaryProps {
  config: CloudinaryConfig;
  onUploadComplete: (result: CloudinaryUploadResult) => void;
  onUploadError?: (error: string) => void;
  maxFiles?: number;
  allowedFileTypes?: string[];
  buttonText?: string;
  style?: React.CSSProperties;
}

interface CloudinaryUploadResult {
  secure_url: string;
  public_id: string;
  format: string;
  width: number;
  height: number;
  resource_type: string;
  created_at: string;
  bytes: number;
  [key: string]: any;
}

const UploadToCloudinary: React.FC<UploadToCloudinaryProps> = ({
  config,
  onUploadComplete,
  onUploadError,
  maxFiles = 1,
  allowedFileTypes = ["image"],
  buttonText = "Upload Media",
  style = {},
}) => {
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [uploadedFiles, setUploadedFiles] = useState<CloudinaryUploadResult[]>(
    []
  );
  const [uploadProgress, setUploadProgress] = useState<number>(0);

  const pickImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (uploadedFiles.length >= maxFiles) {
      window.alert(
        `Maximum files reached\nYou can only upload ${maxFiles} file(s)`
      );
      return;
    }

    const file = event.target.files?.[0];
    if (!file) return;

    uploadToCloudinary(file);
  };

  const uploadToCloudinary = async (file: File) => {
    setIsUploading(true);
    setUploadProgress(0);

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", config.uploadPreset);
      if (config.apiKey) {
        formData.append("api_key", config.apiKey);
      }

      const xhr = new XMLHttpRequest();
      xhr.open(
        "POST",
        `https://api.cloudinary.com/v1_1/${config.cloudName}/auto/upload`
      );

      xhr.upload.onprogress = (e) => {
        if (e.lengthComputable) {
          const progress = Math.round((e.loaded / e.total) * 100);
          setUploadProgress(progress);
        }
      };

      xhr.onload = () => {
        if (xhr.status === 200) {
          const response: CloudinaryUploadResult = JSON.parse(xhr.responseText);
          setUploadedFiles([...uploadedFiles, response]);
          onUploadComplete(response);
        } else {
          const errorMessage = `Upload failed: ${xhr.statusText}`;
          onUploadError?.(errorMessage);
          window.alert(errorMessage);
        }
        setIsUploading(false);
      };

      xhr.onerror = () => {
        const errorMessage = "Network error during upload";
        onUploadError?.(errorMessage);
        window.alert(errorMessage);
        setIsUploading(false);
      };

      xhr.send(formData);
    } catch (error) {
      const errorMessage = `Error: ${
        error instanceof Error ? error.message : "Unknown error"
      }`;
      onUploadError?.(errorMessage);
      window.alert(errorMessage);
      setIsUploading(false);
    }
  };

  const removeFile = (index: number) => {
    const newFiles = [...uploadedFiles];
    newFiles.splice(index, 1);
    setUploadedFiles(newFiles);
  };

  return (
    <div className="p-4" style={style}>
      <label
        className={`bg-blue-500 px-4 py-4 rounded-lg flex flex-row justify-center items-center cursor-pointer ${
          isUploading || uploadedFiles.length >= maxFiles
            ? "opacity-50 cursor-not-allowed"
            : ""
        }`}
      >
        {isUploading ? (
          <div className="flex flex-row items-center">
            <div className="w-6 h-6 border-2 border-t-2 border-white border-t-transparent rounded-full animate-spin" />
            <p className="text-white ml-2 text-lg">{`Uploading: ${uploadProgress}%`}</p>
          </div>
        ) : (
          <>
            <MdCloudUpload size={24} color="white" />
            <p className="text-white text-lg font-semibold ml-2">
              {buttonText}
            </p>
          </>
        )}
        <input
          type="file"
          accept={
            allowedFileTypes.includes("video") ? "image/*,video/*" : "image/*"
          }
          onChange={pickImage}
          className="hidden"
          disabled={isUploading || uploadedFiles.length >= maxFiles}
        />
      </label>

      {uploadedFiles.length > 0 && (
        <div className="mt-5">
          <p className="text-lg font-semibold mb-2.5">Uploaded Files:</p>
          {uploadedFiles.map((file, index) => (
            <div
              key={file.public_id}
              className="flex flex-row bg-gray-100 rounded-lg p-3 mb-2 items-center"
            >
              {file.resource_type === "image" && (
                <Image
                  src={file.secure_url}
                  alt="Thumbnail"
                  width={1000}
                  height={1000}
                  className="w-[50px] h-[50px] rounded-md mr-3"
                />
              )}
              <div className="flex-1">
                <p className="text-base font-medium truncate">
                  {file.public_id.split("/").pop()}
                </p>
                <p className="text-xs text-gray-600 mt-1">{`${(
                  file.bytes / 1024
                ).toFixed(1)} KB • ${file.width}×${file.height}`}</p>
              </div>
              <button className="p-1" onClick={() => removeFile(index)}>
                <MdDelete size={24} color="#ff3b30" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UploadToCloudinary;
