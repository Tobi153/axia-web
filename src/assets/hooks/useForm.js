import { useForm as useReactHookForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../schemas/authSchema";
import { useAuth } from "./useAuth";

export const useLoginForm = () => {
  const { login } = useAuth();

  const form = useReactHookForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      const userData = await login(data);
      //Remove later
      console.log("Login successful", userData);
      return userData;
    } catch (error) {
      form.setError("root.serverError", {
        type: "manual",
        message: error.message || "Login failed",
      });
      throw error;
    }
  };

  return {
    ...form,
    handleSubmit: form.handleSubmit(onSubmit),
  };
};
