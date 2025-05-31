"use client";

import React, { useState } from "react";
import ProfileImageUploader from "./ProfileImageUploader";
import FormRow from "../../../../../components/ui/form/FormRow";
import InputField from "../../../../../components/ui/form/InputField";
import SelectField from "../../../../../components/ui/form/SelectField";
import FileUploader from "../../../../../components/ui/form/FileUploader";
import SubmitButton from "../../../../../components/ui/form/SubmitButton ";
import { validateForm } from "@/utils/ValidateForm";
import { uploadToCloudinary } from "@/utils/uploadToCloudinary";
import {
  subjects,
  districts,
  educationLevels,
  religions,
  maritalStatusOptions,
} from "./data";
import FormHeader from "../../../../../components/ui/form/FormHeader";
import TextAreaField from "../../../../../components/ui/form/TextAreaField";
import Title from "@/app/(WithHomeLayout)/_components/ui/Title";

// Define interfaces for form data and files
interface FileData {
  uri: string;
  type: string;
  name: string;
}

interface FormData {
  subject: string;
  interestedArea: string;
  fullName: string;
  gender: string;
  fatherName: string;
  motherName: string;
  maritalStatus: string;
  religion: string;
  birthYear: string;
  district: string;
  permanentAddress: string;
  temporaryAddress: string;
  mobileNumber: string;
  emergencyContact: string;
  email: string;
  education: string;
  nationalId: string;
  experience: string;
  profileImage: FileData | null;
  cv: FileData | null;
}

interface Errors {
  [key: string]: string | undefined;
}

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    subject: "",
    interestedArea: "",
    fullName: "",
    gender: "",
    fatherName: "",
    motherName: "",
    maritalStatus: "",
    religion: "",
    birthYear: "",
    district: "",
    permanentAddress: "",
    temporaryAddress: "",
    mobileNumber: "",
    emergencyContact: "",
    email: "",
    education: "",
    nationalId: "",
    experience: "",
    profileImage: null,
    cv: null,
  });

  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData({ ...formData, [field]: value });

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors({ ...errors, [field]: undefined });
    }
  };

  const handleProfileImageUpload = (image: FileData | null) => {
    setFormData({ ...formData, profileImage: image });
    if (errors.profileImage) {
      setErrors({ ...errors, profileImage: undefined });
    }
  };

  const handleCvUpload = (file: FileData | null) => {
    setFormData({ ...formData, cv: file });
    if (errors.cv) {
      setErrors({ ...errors, cv: undefined });
    }
  };

  const handleSubmit = async () => {
    const validationErrors = validateForm({
      subject: { value: formData.subject, required: true, type: "select" },
      interestedArea: {
        value: formData.interestedArea,
        required: true,
        type: "text",
      },
      fullName: { value: formData.fullName, required: true, type: "text" },
      gender: { value: formData.gender, required: true, type: "select" },
      fatherName: { value: formData.fatherName, required: true, type: "text" },
      motherName: { value: formData.motherName, required: true, type: "text" },
      maritalStatus: {
        value: formData.maritalStatus,
        required: true,
        type: "select",
      },
      religion: { value: formData.religion, required: true, type: "select" },
      birthYear: { value: formData.birthYear, required: true, type: "text" },
      district: { value: formData.district, required: true, type: "select" },
      permanentAddress: {
        value: formData.permanentAddress,
        required: true,
        type: "text",
      },
      temporaryAddress: {
        value: formData.temporaryAddress,
        required: true,
        type: "text",
      },
      mobileNumber: {
        value: formData.mobileNumber,
        required: true,
        type: "text",
      },
      emergencyContact: {
        value: formData.emergencyContact,
        required: true,
        type: "text",
      },
      email: { value: formData.email, required: true, type: "email" },
      education: { value: formData.education, required: true, type: "select" },
      nationalId: { value: formData.nationalId, required: true, type: "text" },
      experience: { value: formData.experience, required: false, type: "text" },
      profileImage: {
        value: formData.profileImage?.uri ?? null,
        required: false,
        type: "image",
        maxSize: 2 * 1024 * 1024, // 2MB
      },
      cv: {
        value: formData.cv?.uri ?? null,
        required: false,
        type: "file",
        maxSize: 5 * 1024 * 1024, // 5MB
        allowedTypes: [
          "application/pdf",
          "application/msword",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ],
      },
    });

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      let profileImageUrl = "";
      let cvUrl = "";

      // Upload files to Cloudinary
      if (formData.profileImage) {
        const result = await uploadToCloudinary(formData.profileImage);
        profileImageUrl = result.secure_url;
      }

      if (formData.cv) {
        const result = await uploadToCloudinary(formData.cv);
        cvUrl = result.secure_url;
      }

      // Final data with file URLs
      const finalData = {
        ...formData,
        profileImageUrl,
        cvUrl,
      };

      // Log the final data to console
      console.log("Form submitted:", finalData);

      window.alert("ফর্ম সফলভাবে জমা হয়েছে!");
    } catch (error) {
      console.error("Form submission error:", error);
      window.alert("ফর্ম জমা দিতে সমস্যা হয়েছে। আবার চেষ্টা করুন।");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col flex-1 my-[20px]">
      <Title title="ক্যারিয়ার" className="text-center" />
      {/* Subheader */}
      <h2 className="my-10 text-[24px] leading-[32px] lg:text-[32px] lg:leading-[35px] font-medium">
        আমাদের সঙ্গে গড়ে তুলুন আপনার সাংবাদিকতার ভবিষ্যৎ
      </h2>

      <div className="flex flex-col bg-white rounded-xl max-w-5xl mx-auto w-full">
        <FormHeader />
        <ProfileImageUploader
          onImageSelected={handleProfileImageUpload}
          error={errors.profileImage}
        />

        <div className="max-w-4xl mx-auto w-full p-4">
          {/* Row 1 */}
          <FormRow>
            <SelectField
              label="আবেদনের সাবজেক্ট সিলেক্ট করুন"
              value={formData.subject}
              onValueChange={(value) => handleInputChange("subject", value)}
              items={subjects as []}
              placeholder="সিলেক্ট করুন"
              required
              error={errors.subject}
            />

            <InputField
              label="আগ্রহী অঞ্চল"
              value={formData.interestedArea}
              onChangeText={(text) => handleInputChange("interestedArea", text)}
              placeholder="আগ্রহী কর্মক্ষেত্রের নাম (জেলা/উপজেলা/ক্যাম্পাস)"
              required
              error={errors.interestedArea}
            />
          </FormRow>

          {/* Row 2 */}
          <FormRow>
            <InputField
              label="পুরো নাম"
              value={formData.fullName}
              onChangeText={(text) => handleInputChange("fullName", text)}
              placeholder="লিখুন"
              required
              error={errors.fullName}
            />

            <SelectField
              label="লিঙ্গ"
              value={formData.gender}
              onValueChange={(value) => handleInputChange("gender", value)}
              items={[
                { label: "পুরুষ", value: "male" },
                { label: "মহিলা", value: "female" },
                { label: "অন্যান্য", value: "other" },
              ]}
              placeholder="সিলেক্ট করুন"
              required
              error={errors.gender}
            />
          </FormRow>

          {/* Row 3 */}
          <FormRow>
            <InputField
              label="বাবার নাম"
              value={formData.fatherName}
              onChangeText={(text) => handleInputChange("fatherName", text)}
              placeholder="লিখুন"
              required
              error={errors.fatherName}
            />

            <InputField
              label="মায়ের নাম"
              value={formData.motherName}
              onChangeText={(text) => handleInputChange("motherName", text)}
              placeholder="লিখুন"
              required
              error={errors.motherName}
            />
          </FormRow>

          {/* Row 4 */}
          <FormRow>
            <SelectField
              label="বৈবাহিক স্ট্যাটাস"
              value={formData.maritalStatus}
              onValueChange={(value) =>
                handleInputChange("maritalStatus", value)
              }
              items={maritalStatusOptions.map((status) => ({
                label: status,
                value: status,
              }))}
              placeholder="সিলেক্ট করুন"
              required
              error={errors.maritalStatus}
            />

            <SelectField
              label="ধর্ম"
              value={formData.religion}
              onValueChange={(value) => handleInputChange("religion", value)}
              items={religions.map((religion) => ({
                label: religion,
                value: religion,
              }))}
              placeholder="সিলেক্ট করুন"
              required
              error={errors.religion}
            />
          </FormRow>

          {/* Row 5 */}
          <FormRow>
            <InputField
              label="জন্ম সাল"
              value={formData.birthYear}
              onChangeText={(text) => handleInputChange("birthYear", text)}
              placeholder="লিখুন (উদাহরণ: ১৯৯০)"
              required
              error={errors.birthYear}
            />

            <SelectField
              label="নিজ জেলা"
              value={formData.district}
              onValueChange={(value) => handleInputChange("district", value)}
              items={districts.map((district) => ({
                label: district,
                value: district,
              }))}
              placeholder="সিলেক্ট করুন"
              required
              error={errors.district}
            />
          </FormRow>

          {/* Row 6 */}
          <FormRow>
            <InputField
              label="স্থায়ী ঠিকানা"
              value={formData.permanentAddress}
              onChangeText={(text) =>
                handleInputChange("permanentAddress", text)
              }
              placeholder="লিখুন"
              required
              error={errors.permanentAddress}
            />

            <InputField
              label="অস্থায়ী ঠিকানা"
              value={formData.temporaryAddress}
              onChangeText={(text) =>
                handleInputChange("temporaryAddress", text)
              }
              placeholder="লিখুন"
              required
              error={errors.temporaryAddress}
            />
          </FormRow>

          {/* Row 7 */}
          <FormRow>
            <InputField
              label="মোবাইল নাম্বার"
              value={formData.mobileNumber}
              onChangeText={(text) => handleInputChange("mobileNumber", text)}
              placeholder="লিখুন (উদাহরণ: 01XXXXXXXXX)"
              required
              error={errors.mobileNumber}
            />

            <InputField
              label="জরুরী যোগাযোগের জন্য মোবাইল নাম্বার"
              value={formData.emergencyContact}
              onChangeText={(text) =>
                handleInputChange("emergencyContact", text)
              }
              placeholder="লিখুন (উদাহরণ: 01XXXXXXXXX)"
              required
              error={errors.emergencyContact}
            />
          </FormRow>

          {/* Row 8 */}
          <FormRow>
            <InputField
              label="ই-মেইল"
              value={formData.email}
              onChangeText={(text) => handleInputChange("email", text)}
              placeholder="লিখুন"
              required
              error={errors.email}
            />

            <SelectField
              label="শিক্ষাগত যোগ্যতা"
              value={formData.education}
              onValueChange={(value) => handleInputChange("education", value)}
              items={educationLevels.map((level) => ({
                label: level,
                value: level,
              }))}
              placeholder="সিলেক্ট করুন"
              required
              error={errors.education}
            />
          </FormRow>

          {/* Row 9 */}
          <FormRow>
            <InputField
              label="জাতীয় পরিচয়পত্র নম্বর"
              value={formData.nationalId}
              onChangeText={(text) => handleInputChange("nationalId", text)}
              placeholder="লিখুন"
              required
              error={errors.nationalId}
            />
            {/* CV Upload */}
            <FileUploader
              label="সিভি আপলোড করুন"
              onFileSelected={handleCvUpload}
              maxSize={5 * 1024 * 1024} // 5MB
              allowedTypes={[
                "application/pdf",
                "application/msword",
                "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
              ]}
              error={errors.cv}
            />
          </FormRow>

          <TextAreaField
            label="কাজের অভিজ্ঞতা (যদি থাকে)"
            value={formData.experience}
            onChangeText={(text) => handleInputChange("experience", text)}
            placeholder="লিখুন"
            error={errors.experience}
          />

          <SubmitButton onPress={handleSubmit} isLoading={isSubmitting} />
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
