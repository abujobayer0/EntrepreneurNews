// Define interfaces for form data and validation rules
interface FormField {
  value: string | null;
  required?: boolean;
  type?: 'text' | 'email' | 'select' | 'file' | 'image';
  maxSize?: number; // in bytes
  allowedTypes?: string[]; // MIME types
}

interface FormData {
  [key: string]: FormField;
}

interface Errors {
  [key: string]: string;
}

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Validate form function
export const validateForm = (formData: FormData): Errors => {
  const errors: Errors = {};

  Object.entries(formData).forEach(([key, field]) => {
    const { value, required, type, maxSize, allowedTypes } = field;

    // Check for required fields
    if (required && (value === null || value === '')) {
      errors[key] = `${key} is required`;
      return;
    }

    // Skip further validation if field is empty and not required
    if (!required && (value === null || value === '')) {
      return;
    }

    // Type-specific validations
    if (type === 'email' && value && !emailRegex.test(value)) {
      errors[key] = 'Invalid email format';
    }

    // File/Image validation (assuming value is a URI for files)
    if ((type === 'file' || type === 'image') && value) {
      // Note: File size and type validation would typically require fetching the file
      // Here, we assume the component handles size/type checks before calling validateForm
      if (maxSize && typeof value === 'string') {
        // Placeholder: In a real app, you'd fetch the file to check size
        // This is handled in components like FileUploader/ProfileImageUploader
      }
      if (allowedTypes && typeof value === 'string') {
        // Placeholder: MIME type checking is typically done in the picker
      }
    }
  });

  return errors;
};
