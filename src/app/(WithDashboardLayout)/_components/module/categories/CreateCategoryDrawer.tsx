import React, { useState } from "react";
import { Drawer } from "../../ui/Drawer";
import { Button } from "@/components/ui/button/Button";
import { Toggle } from "../../ui/Toggle";
import InputField from "@/components/ui/form/InputField";
import TextAreaField from "@/components/ui/form/TextAreaField";

interface CreateCategoryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: CategoryFormData) => void;
}

export interface CategoryFormData {
  title: string;
  description: string;
  status: boolean;
  isFeatured: boolean;
  showRating: boolean;
}

export const CreateCategoryDrawer: React.FC<CreateCategoryDrawerProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [formData, setFormData] = useState<CategoryFormData>({
    title: "",
    description: "",
    status: true,
    isFeatured: false,
    showRating: false,
  });

  const handleChange = (
    name: keyof CategoryFormData,
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
      title: "",
      description: "",
      status: true,
      isFeatured: false,
      showRating: false,
    });
    onClose();
  };

  const actions = (
    <>
      <Button
        title="Submit"
        className="w-full rounded-2xl font-semibold"
        onClick={handleSubmit}
      />
    </>
  );

  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      title="Create Category"
      actions={actions}
      width={700}
    >
      <div className="flex-col gap-4">
        <InputField
          label="Title"
          value={formData.title}
          onChangeText={(value) => handleChange("title", value)}
          placeholder="Write title"
        />

        <TextAreaField
          label="Description"
          value={formData.description}
          onChangeText={(value) => handleChange("description", value)}
          placeholder="description"
        />

        <div className="flex flex-row gap-5 items-center py-2">
          <Toggle
            onChange={() => {}}
            value={formData.status}
            label="Active Status"
          />
          <Toggle
            onChange={() => {}}
            value={formData.isFeatured}
            label="Is Featured"
          />
        </div>
      </div>
    </Drawer>
  );
};
