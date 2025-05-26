import React, { useState } from "react";
import { Drawer } from "../../ui/Drawer";
import { Button } from "@/components/ui/button/Button";
import SelectField, { PickerItem } from "@/components/ui/form/SelectField";
import InputField from "@/components/ui/form/InputField";
import TextAreaField from "@/components/ui/form/TextAreaField";
import { Toggle } from "../../ui/Toggle";

interface CreateOpinionDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: OpinionFormData) => void;
  categories: PickerItem[];
  authors: PickerItem[];
}

export interface OpinionFormData {
  title: string;
  content: string;
  categoryId: string;
  authorId: string;
  tags: string;
  orderPriority: string;
  isActive: boolean;
  isFeatured: boolean;
}

export const CreateOpinionDrawer: React.FC<CreateOpinionDrawerProps> = ({
  isOpen,
  onClose,
  onSubmit,
  categories,
  authors,
}) => {
  const [formData, setFormData] = useState<OpinionFormData>({
    title: "",
    content: "",
    categoryId: "",
    authorId: "",
    tags: "",
    orderPriority: "",
    isActive: true,
    isFeatured: false,
  });

  const handleChange = (
    name: keyof OpinionFormData,
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
      content: "",
      categoryId: "",
      authorId: "",
      tags: "",
      orderPriority: "",
      isActive: true,
      isFeatured: false,
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
      title="Create Opinion"
      actions={actions}
      width={700}
    >
      <div className="flex-col gap-4">
        <InputField
          label="Title"
          value={formData.title}
          onChangeText={(value) => handleChange("title", value)}
          placeholder="Write title"
          required
        />

        <TextAreaField
          label="Content"
          value={formData.content}
          onChangeText={(value) => handleChange("content", value)}
          placeholder="Write opinion content"
          required
        />

        <SelectField
          label="Category"
          value={formData.categoryId}
          onValueChange={(value) => handleChange("categoryId", value)}
          items={categories}
          placeholder="Select category"
          required
        />

        <SelectField
          label="Author"
          value={formData.authorId}
          onValueChange={(value) => handleChange("authorId", value)}
          items={authors}
          placeholder="Select author"
          required
        />

        <InputField
          label="Tags"
          value={formData.tags}
          onChangeText={(value) => handleChange("tags", value)}
          placeholder="Enter tags (comma separated)"
        />

        <InputField
          label="Order Priority"
          value={formData.orderPriority}
          onChangeText={(value) => handleChange("orderPriority", value)}
          placeholder="Order priority"
          type="number"
        />

        <div className="flex flex-row justify-between items-center py-2">
          <Toggle
            onChange={() => {}}
            value={formData.isActive}
            label="Active Status"
          />
        </div>

        <div className="flex flex-row justify-between items-center py-2">
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
