"use client";

import React, { useState } from "react";
import { Drawer } from "../../ui/Drawer";
import { Button } from "@/components/ui/button/Button";
import { Toggle } from "../../ui/Toggle";
import InputField from "@/components/ui/form/InputField";
import TextAreaField from "@/components/ui/form/TextAreaField";
import SelectField, { PickerItem } from "@/components/ui/form/SelectField";

interface CreateSubCategoryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: SubCategoryFormData) => void;
  categories: PickerItem[];
}

export interface SubCategoryFormData {
  title: string;
  description: string;
  categoryId: string;
  orderPriority: string;
  isActive: boolean;
  isFeatured: boolean;
}

export const CreateSubCategoryDrawer: React.FC<
  CreateSubCategoryDrawerProps
> = ({ isOpen, onClose, onSubmit, categories }) => {
  const [formData, setFormData] = useState<SubCategoryFormData>({
    title: "",
    description: "",
    categoryId: "",
    orderPriority: "",
    isActive: true,
    isFeatured: false,
  });

  const handleChange = (
    name: keyof SubCategoryFormData,
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
      categoryId: "",
      orderPriority: "",
      isActive: true,
      isFeatured: false,
    });
    onClose();
  };

  const actions = (
    <div className="flex gap-2">
      <Button
        className="w-full rounded-2xl font-semibold"
        title="Submit"
        onClick={handleSubmit}
      />
    </div>
  );

  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      title="Create a Sub-Category"
      actions={actions}
      width={700}
    >
      <div className="flex flex-col gap-4">
        <InputField
          label="Title"
          value={formData.title}
          onChangeText={(value) => handleChange("title", value)}
          placeholder="Write title"
          required
        />

        <TextAreaField
          label="Description"
          value={formData.description}
          onChangeText={(value) => handleChange("description", value)}
          placeholder="Description"
        />

        <SelectField
          label="Categories"
          value={formData.categoryId}
          onValueChange={(value) => handleChange("categoryId", value)}
          items={categories}
          placeholder="Select category"
          required
        />

        <InputField
          label="Order Priority"
          value={formData.orderPriority}
          onChangeText={(value) => handleChange("orderPriority", value)}
          placeholder="Order priority"
          type="number"
        />

        <div className="flex gap-5 items-center py-2">
          <Toggle
            label="Active Status"
            value={formData.isActive}
            onChange={(value) => setFormData({ ...formData, isActive: value })}
          />
          <Toggle
            label="isFeatured"
            value={formData.isFeatured}
            onChange={(value) =>
              setFormData({ ...formData, isFeatured: value })
            }
          />
        </div>
      </div>
    </Drawer>
  );
};
