/* eslint-disable @typescript-eslint/no-explicit-any */
interface FileData {
  uri: string;
  type: string;
  name: string;
}

interface CloudinaryResponse {
  secure_url: string;
  public_id: string;
  [key: string]: any;
}

// Cloudinary configuration (replace with your actual values)
const CLOUDINARY_CLOUD_NAME = "your-cloud-name";
const CLOUDINARY_UPLOAD_PRESET = "your-upload-preset";
const CLOUDINARY_API_URL = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/auto/upload`;

export const uploadToCloudinary = async (
  file: FileData
): Promise<CloudinaryResponse> => {
  try {
    const formData = new FormData();
    formData.append("file", {
      uri: file.uri,
      type: file.type,
      name: file.name,
    } as any);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

    const response = await fetch(CLOUDINARY_API_URL, {
      method: "POST",
      body: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (!response.ok) {
      throw new Error(`Upload failed with status ${response.status}`);
    }

    const data: CloudinaryResponse = await response.json();
    return data;
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    throw new Error("Failed to upload file to Cloudinary");
  }
};
