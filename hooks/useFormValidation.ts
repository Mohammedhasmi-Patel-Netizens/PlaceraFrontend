import { useState, useCallback } from 'react';
import { ObjectSchema } from 'yup';

interface ValidationErrors {
  [key: string]: string;
}

export const useFormValidation = <T extends Record<string, any>>(schema: ObjectSchema<any>) => {
  const [errors, setErrors] = useState<ValidationErrors>({});

  const validateField = useCallback(
    async (fieldName: keyof T, value: any): Promise<boolean> => {
      try {
        await schema.validateAt(fieldName as string, { [fieldName]: value });
        setErrors((prev) => {
          const newErrors = { ...prev };
          delete newErrors[fieldName as string];
          return newErrors;
        });
        return true;
      } catch (error: any) {
        setErrors((prev) => ({
          ...prev,
          [fieldName]: error.message
        }));
        return false;
      }
    },
    [schema]
  );

  const validateForm = useCallback(
    async (values: T): Promise<boolean> => {
      try {
        await schema.validate(values, { abortEarly: false });
        setErrors({});
        return true;
      } catch (error: any) {
        const validationErrors: ValidationErrors = {};
        error.inner.forEach((err: any) => {
          if (err.path) {
            validationErrors[err.path] = err.message;
          }
        });
        setErrors(validationErrors);
        return false;
      }
    },
    [schema]
  );

  const clearError = useCallback((fieldName: keyof T) => {
    setErrors((prev) => {
      const newErrors = { ...prev };
      delete newErrors[fieldName as string];
      return newErrors;
    });
  }, []);

  const clearAllErrors = useCallback(() => {
    setErrors({});
  }, []);

  return {
    errors,
    validateField,
    validateForm,
    clearError,
    clearAllErrors
  };
};