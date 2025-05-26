"use client";

import React, { useState } from "react";

interface FormField {
  name: string;
  value: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  errorMessage?: string;
  customValidator?: (value: string) => string | null;
}

interface ValidateFormProps {
  fields: FormField[];
  onSubmit: (formData: Record<string, string>) => void;
  submitButtonText?: string;
  style?: React.CSSProperties;
}

const ValidateForm: React.FC<ValidateFormProps> = ({
  fields,
  onSubmit,
  submitButtonText = "Submit",
  style = {},
}) => {
  const [formState, setFormState] = useState<FormField[]>(fields);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (text: string, index: number) => {
    const updatedFields = [...formState];
    updatedFields[index].value = text;
    if (errors[updatedFields[index].name]) {
      const updatedErrors = { ...errors };
      delete updatedErrors[updatedFields[index].name];
      setErrors(updatedErrors);
    }
    setFormState(updatedFields);
  };

  const validateField = (field: FormField): string | null => {
    const {
      name,
      value,
      required,
      minLength,
      maxLength,
      pattern,
      customValidator,
    } = field;

    if (required && !value.trim()) {
      return field.errorMessage || `${name} is required`;
    }

    if (!value.trim()) {
      return null;
    }

    if (minLength && value.length < minLength) {
      return `${name} must be at least ${minLength} characters`;
    }

    if (maxLength && value.length > maxLength) {
      return `${name} cannot exceed ${maxLength} characters`;
    }

    if (pattern && !pattern.test(value)) {
      return `${name} format is invalid`;
    }

    if (customValidator) {
      return customValidator(value);
    }

    return null;
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    formState.forEach((field) => {
      const error = validateField(field);
      if (error) {
        newErrors[field.name] = error;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      const formData: Record<string, string> = {};
      formState.forEach((field) => {
        formData[field.name] = field.value;
      });
      onSubmit(formData);
    }
  };

  return (
    <div className="h-full p-4" style={style}>
      <div className="h-full overflow-y-auto">
        {formState.map((field, index) => (
          <div key={field.name} className="mb-4">
            <label className="block text-base font-medium mb-2">
              {field.name}
              {field.required ? " *" : ""}
            </label>
            <input
              className={`w-full border rounded-lg p-3 text-base ${
                errors[field.name] ? "border-red-500" : "border-gray-300"
              }`}
              value={field.value}
              onChange={(e) => handleChange(e.target.value, index)}
              placeholder={`Enter ${field.name.toLowerCase()}`}
            />
            {errors[field.name] && (
              <p className="text-red-500 text-sm mt-1">{errors[field.name]}</p>
            )}
          </div>
        ))}
        <button
          type="button"
          className="bg-blue-500 px-4 py-4 rounded-lg flex items-center justify-center mt-2 mb-6"
          onClick={handleSubmit}
        >
          <span className="text-white text-base font-semibold">
            {submitButtonText}
          </span>
        </button>
      </div>
    </div>
  );
};

export default ValidateForm;
