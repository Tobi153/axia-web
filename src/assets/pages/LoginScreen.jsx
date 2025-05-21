import { FormProvider } from "react-hook-form";
import { loginSchema } from "../schemas/authSchema";

import { FormInput } from "../components/ui/FormInput";
import { SubmitButton } from "../components/ui/Button";
import { useAuthForm } from "../hooks/useAuthForm";
import { FormError } from "../components/ui/FormError";
import axiaLogo from "../images/axia.png";
import { FormInfo } from "../components/ui/FormInfo";

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
      // successToast({ message: `Welcome back ${data.email}!` });
      console.log(data);
      // throw new Error("Account already exists");
    },
  });
  const { handleSubmit, errors, isSubmitting } = methods;

  return (
    <div className="login-container w-[100vw] h-[100vh] flex items-center justify-center">
      <div className="login-screen">
        <img src={axiaLogo} alt="AXIA logo" className="w-[74px] mx-auto mb-3" />
        <FormInfo
          heading="Log in to your account"
          note="Welcome back. Please enter your details."
        />
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
      </div>
    </div>
  );
}
