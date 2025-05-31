"use client";

import Image from "next/image";
import React, { useState } from "react";
import { IoAdd, IoCloseCircle } from "react-icons/io5";

interface SelectedImage {
  uri: string;
  type: string;
  name: string;
}

interface ProfileImageUploaderProps {
  onImageSelected: (image: SelectedImage | null) => void;
  error?: string;
}

const ProfileImageUploader: React.FC<ProfileImageUploaderProps> = ({
  onImageSelected,
  error,
}) => {
  const [imageUri, setImageUri] = useState<string | null>(null);

  const pickImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Check file size (2MB limit)
    if (file.size > 2 * 1024 * 1024) {
      alert("ছবির সাইজ 2MB এর বেশি হতে পারবে না");
      return;
    }

    setImageUri(URL.createObjectURL(file));
    onImageSelected({
      uri: URL.createObjectURL(file),
      type: "image/jpeg",
      name: "profile-image.jpg",
    });

    // Optional: Integrate Cloudinary Upload Widget here
    // const uploadWidget = window.cloudinary.createUploadWidget(
    //   { cloudName: 'YOUR_CLOUD_NAME', uploadPreset: 'YOUR_UPLOAD_PRESET' },
    //   (error, result) => {
    //     if (!error && result && result.event === 'success') {
    //       onImageSelected({ uri: result.info.secure_url, type: 'image/jpeg', name: 'profile-image.jpg' });
    //     }
    //   }
    // );
    // uploadWidget.open();
  };

  const removeImage = () => {
    setImageUri(null);
    onImageSelected(null);
  };

  return (
    <div className="flex flex-col items-center justify-center my-6">
      {imageUri ? (
        <div className="relative w-[133px] h-[133px]">
          <Image
            src={imageUri}
            alt="Profile"
            width={1000}
            height={1000}
            className="w-[133px] h-[133px] rounded-[8px] border-2 border-gray-300"
          />
          <button
            className="absolute top-[-10px] right-[-10px] bg-white rounded-[12px] shadow-sm"
            onClick={removeImage}
          >
            <IoCloseCircle size={24} color="#ef4444" />
          </button>
        </div>
      ) : (
        <label className="w-[133px] h-[133px] border-2 border-dashed border-gray-300 rounded-[8px] flex flex-col items-center justify-center bg-gray-50 gap-1 cursor-pointer">
          <IoAdd size={36} color="#9ca3af" />
          <p className="text-gray-600 text-sm mt-1">প্রোফাইল ছবি</p>
          <p className="text-gray-600 text-xs">2 MB সর্বাধিক</p>
          <input
            type="file"
            accept="image/*"
            onChange={pickImage}
            className="hidden"
          />
        </label>
      )}
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default ProfileImageUploader;
