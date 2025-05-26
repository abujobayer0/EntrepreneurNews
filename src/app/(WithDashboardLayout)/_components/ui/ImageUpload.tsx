"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { CameraIcon } from "@/components/ui/icons/Icons";
import { theme } from "@/constants/theme";
import { X } from "lucide-react";

interface ImageUploadProps {
  value?: string;
  onChange: (value: string) => void;
  label?: string;
  error?: string;
}

export const ImageUpload: React.FC<ImageUploadProps> = ({
  value,
  onChange,
  label,
  error,
}) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [preview, setPreview] = useState<string | undefined>(value);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setPreview(result);
        onChange(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleRemove = () => {
    setPreview(undefined);
    onChange("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="mb-4 flex flex-col items-center justify-center gap-2">
      {label && (
        <p
          className="text-sm font-medium"
          style={{ color: theme.colors.black }}
        >
          {label}
        </p>
      )}

      <div className="relative">
        <div className="size-20 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden shadow-sm border border-gray-200">
          {preview ? (
            <Image
              src={preview}
              alt="Preview"
              className="w-full h-full object-cover"
              width={96}
              height={96}
            />
          ) : (
            <div className="flex flex-col items-center text-center">
              <CameraIcon size={24} color={theme.colors.gray} />
              <p className="text-xs mt-1" style={{ color: theme.colors.gray }}>
                Upload
              </p>
            </div>
          )}
        </div>

        {/* Upload Button Overlay */}
        <button
          type="button"
          onClick={handleUploadClick}
          className="absolute bottom-0 right-0 size-7 bg-white border border-gray-300 rounded-full flex items-center justify-center shadow"
        >
          <CameraIcon size={12} color={theme.colors.primary} />
        </button>

        {/* Remove Button */}
        {preview && (
          <button
            type="button"
            onClick={handleRemove}
            className="absolute -top-1 -right-1 size-5 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center text-[10px]"
          >
            <X size={12} />
          </button>
        )}
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />

      {error && (
        <p
          className="text-xs mt-1 text-red-500"
          style={{ color: theme.colors.error }}
        >
          {error}
        </p>
      )}
    </div>
  );
};
