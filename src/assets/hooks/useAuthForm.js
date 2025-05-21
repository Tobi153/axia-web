import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { errorToast, successToast } from "../components/ui/toasts";
import { loginSchema } from "../schemas/authSchema";

export function useAuthForm({ schema, defaultValues, onSubmitCallback }) {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues,
    resolver: zodResolver(schema),
  });
  const onSubmit = async (data) => {
    try {
      await onSubmitCallback(data);
      console.log(data);
      if (schema === loginSchema) {
        successToast({ message: `Welcome back ${data.email}!` });
      } else {
        successToast({ message: "Account created successfully!" });
      }
      throw new Error();
    } catch (error) {
      setError("root", {
        message: error.message,
      });

      // errorToast({ message: error.message });
    }
  };
  // Display toasts
  useEffect(() => {
    Object.keys(errors).forEach((field) => {
      if (field !== "root" && errors[field]) {
        errorToast({ message: errors[field].message });
      }
    });
  }, [errors]);

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    setError,
    errors,
    isSubmitting,
  };
}
