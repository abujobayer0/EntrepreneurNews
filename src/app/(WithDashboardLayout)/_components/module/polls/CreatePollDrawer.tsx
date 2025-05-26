"use client";

import React, { useState } from "react";
import { Drawer } from "../../ui/Drawer";
import { Button } from "@/components/ui/button/Button";
import { TrashIcon, PlusIcon } from "@/components/ui/icons/Icons";
import SelectField, { PickerItem } from "@/components/ui/form/SelectField";
import InputField from "@/components/ui/form/InputField";
import TextAreaField from "@/components/ui/form/TextAreaField";
import { Toggle } from "../../ui/Toggle";

interface CreatePollDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: PollFormData) => void;
  categories: PickerItem[];
}

interface PollOption {
  id: string;
  text: string;
}

export interface PollFormData {
  question: string;
  description: string;
  categoryId: string;
  expiryDate: string;
  options: PollOption[];
  isActive: boolean;
  isFeatured: boolean;
}

export const CreatePollDrawer: React.FC<CreatePollDrawerProps> = ({
  isOpen,
  onClose,
  onSubmit,
  categories,
}) => {
  const [formData, setFormData] = useState<PollFormData>({
    question: "",
    description: "",
    categoryId: "",
    expiryDate: "",
    options: [{ id: "1", text: "" }],
    isActive: true,
    isFeatured: false,
  });

  const handleChange = (
    name: keyof Omit<PollFormData, "options">,
    value: string | boolean
  ) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleOptionChange = (id: string, text: string) => {
    setFormData((prev) => ({
      ...prev,
      options: prev.options.map((option) =>
        option.id === id ? { ...option, text } : option
      ),
    }));
  };

  const addOption = () => {
    setFormData((prev) => ({
      ...prev,
      options: [
        ...prev.options,
        { id: `${prev.options.length + 1}`, text: "" },
      ],
    }));
  };

  const removeOption = (id: string) => {
    if (formData.options.length <= 1) return;

    setFormData((prev) => ({
      ...prev,
      options: prev.options.filter((option) => option.id !== id),
    }));
  };

  const handleSubmit = () => {
    onSubmit(formData);
    setFormData({
      question: "",
      description: "",
      categoryId: "",
      expiryDate: "",
      options: [{ id: "1", text: "" }],
      isActive: true,
      isFeatured: false,
    });
    onClose();
  };

  const handleCancel = () => {
    setFormData({
      question: "",
      description: "",
      categoryId: "",
      expiryDate: "",
      options: [{ id: "1", text: "" }],
      isActive: true,
      isFeatured: false,
    });
    onClose();
  };

  const actions = (
    <div className="flex gap-2">
      <Button title="Cancel" onClick={handleCancel} variant="outline" />
      <Button title="Submit" onClick={handleSubmit} />
    </div>
  );

  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      title="Create Poll"
      actions={actions}
      width={700}
    >
      <div className="flex flex-col gap-4">
        <InputField
          label="Question"
          value={formData.question}
          onChangeText={(value) => handleChange("question", value)}
          placeholder="Write poll question"
          required
        />

        <TextAreaField
          label="Description"
          value={formData.description}
          onChangeText={(value) => handleChange("description", value)}
          placeholder="Description"
        />

        <SelectField
          label="Category"
          value={formData.categoryId}
          onValueChange={(value) => handleChange("categoryId", value)}
          items={categories}
          placeholder="Select category"
          required
        />

        <InputField
          label="Expiry Date"
          value={formData.expiryDate}
          onChangeText={(value) => handleChange("expiryDate", value)}
          placeholder="YYYY-MM-DD"
          type="date"
        />

        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-black">Poll Options</span>
            <button
              onClick={addOption}
              className="flex items-center p-1 rounded-md bg-primary text-white"
            >
              <PlusIcon />
              <span className="text-xs ml-1">Add Option</span>
            </button>
          </div>

          {formData.options.map((option, index) => (
            <div key={option.id} className="flex items-center gap-2 mb-2">
              <InputField
                placeholder={`Option ${index + 1}`}
                value={option.text}
                onChangeText={(value) => handleOptionChange(option.id, value)}
              />
              <button
                onClick={() => removeOption(option.id)}
                className="p-2"
                disabled={formData.options.length <= 1}
              >
                <TrashIcon />
              </button>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center py-2">
          <Toggle
            onChange={() => {}}
            value={formData.isActive}
            label="Active Status"
          />
        </div>

        <div className="flex justify-between items-center py-2">
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
