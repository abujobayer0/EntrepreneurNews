import React, { useState } from "react";
import { Drawer } from "../../ui/Drawer";
import { ImageUpload } from "../../ui/ImageUpload";
import { Button } from "@/components/ui/button/Button";
import InputField from "@/components/ui/form/InputField";
import { Toggle } from "../../ui/Toggle";

interface AddEntrepreneurDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: EntrepreneurFormData) => void;
}

export interface EntrepreneurFormData {
  nameEn: string;
  designationEn: string;
  organizationEn: string;
  nameBn: string;
  designationBn: string;
  organizationBn: string;
  orderPriority: string;
  isActive: boolean;
  image: string;
}

type Language = "en" | "bn";

export const AddEntrepreneurDrawer: React.FC<AddEntrepreneurDrawerProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [activeLanguage, setActiveLanguage] = useState<Language>("en");
  const [formData, setFormData] = useState<EntrepreneurFormData>({
    nameEn: "",
    designationEn: "",
    organizationEn: "",
    nameBn: "",
    designationBn: "",
    organizationBn: "",
    orderPriority: "",
    isActive: true,
    image: "",
  });

  const handleChange = (
    name: keyof EntrepreneurFormData,
    value: string | boolean
  ) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    onSubmit(formData);
    setFormData({
      nameEn: "",
      designationEn: "",
      organizationEn: "",
      nameBn: "",
      designationBn: "",
      organizationBn: "",
      orderPriority: "",
      isActive: true,
      image: "",
    });
    onClose();
  };
  const actions = (
    <>
      <Button
        className="w-full rounded-2xl font-semibold"
        title="Submit"
        onClick={handleSubmit}
      />
    </>
  );

  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      title="Add Entrepreneur"
      actions={actions}
      width={700}
    >
      <div className="flex-col gap-4">
        {/* Language Selector */}
        <div className="flex flex-row mb-4">
          <button
            type="button"
            onClick={() => setActiveLanguage("en")}
            className={`flex-1 py-2 rounded-l-md ${
              activeLanguage === "en" ? "bg-[#2B3589]" : "bg-gray-400"
            }`}
          >
            <span className="text-center text-white font-medium">English</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveLanguage("bn")}
            className={`flex-1 py-2 rounded-r-md ${
              activeLanguage === "bn" ? "bg-[#2B3589]" : "bg-gray-400"
            }`}
          >
            <span className="text-center text-white font-medium">Bangla</span>
          </button>
        </div>

        {/* Profile Image */}
        <ImageUpload
          label="Profile Image"
          value={formData.image}
          onChange={(value) => handleChange("image", value)}
        />

        {/* English Form Fields */}
        {activeLanguage === "en" && (
          <>
            <InputField
              label="Name"
              value={formData.nameEn}
              onChangeText={(value) => handleChange("nameEn", value)}
              placeholder="Enter name"
              required
            />
            <InputField
              label="Designation"
              value={formData.designationEn}
              onChangeText={(value) => handleChange("designationEn", value)}
              placeholder="Enter designation"
            />
            <InputField
              label="Organization Name"
              value={formData.organizationEn}
              onChangeText={(value) => handleChange("organizationEn", value)}
              placeholder="Enter organization name"
            />
          </>
        )}

        {/* Bangla Form Fields */}
        {activeLanguage === "bn" && (
          <>
            <InputField
              label="নাম"
              value={formData.nameBn}
              onChangeText={(value) => handleChange("nameBn", value)}
              placeholder="নাম লিখুন"
              required
            />
            <InputField
              label="পদবীর নাম"
              value={formData.designationBn}
              onChangeText={(value) => handleChange("designationBn", value)}
              placeholder="পদবী লিখুন"
            />
            <InputField
              label="প্রতিষ্ঠানের নাম"
              value={formData.organizationBn}
              onChangeText={(value) => handleChange("organizationBn", value)}
              placeholder="প্রতিষ্ঠানের নাম লিখুন"
            />
          </>
        )}

        {/* Common Fields */}
        <InputField
          label="Order Priority"
          value={formData.orderPriority}
          onChangeText={(value) => handleChange("orderPriority", value)}
          placeholder="Enter priority number"
          type="number"
        />

        <div className="flex flex-row justify-between items-center py-2">
          <Toggle
            onChange={() => {}}
            value={formData.isActive}
            label="Active Status"
          />
        </div>
      </div>
    </Drawer>
  );
};
