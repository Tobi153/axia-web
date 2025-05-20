import { FormProvider } from "react-hook-form";
import { loginSchema } from "../schemas/authSchema";

import { FormInput } from "../components/ui/FormInput";
import { SubmitButton } from "../components/ui/Button";
import { useAuthForm } from "../hooks/useAuthForm";
import { FormError } from "../components/ui/FormError";

export function LoginScreen() {
  const methods = useAuthForm({
    schema: loginSchema,
    defaultValues: {
      email: "",
      password: "",
    },
    onSubmitCallback: async (data) => {
      console.log(loginSchema.safeParse(data));
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data);
      throw new Error("Account already exists");
    },
  });
  const { handleSubmit, errors, isSubmitting } = methods;

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit}
        className=" w-[500px] flex flex-col gap-y-4"
      >
        <FormInput
          name="email"
          type="email"
          label="Email"
          placeholder="Enter your email"
          iconClass1="fa-solid fa-envelope"
        />
        <FormInput
          name="password"
          type="password"
          label="Password"
          placeholder="Enter your password"
          iconClass1="fa-solid fa-lock"
          iconClass2="fa-solid fa-eye-slash"
          iconClass3="fa-solid fa-eye"
        />
        <SubmitButton isSubmitting={isSubmitting} label="Sign up" />
        <FormError error={errors.root} />
      </form>
    </FormProvider>
  );
}
