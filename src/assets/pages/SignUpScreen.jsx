import { FormProvider } from "react-hook-form";
import { signUpSchema } from "../schemas/authSchema";

import { FormInput } from "../components/ui/FormInput";
import { SubmitButton } from "../components/ui/Button";
import { useAuthForm } from "../hooks/useAuthForm";
import { FormError } from "../components/ui/FormError";
import { FormInfo } from "../components/ui/FormInfo";
import axiaLogo from "../images/axia.png";
import { AltAccount } from "../components/ui/AltAccount";

export function SignUpScreen() {
  const methods = useAuthForm({
    schema: signUpSchema,
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
    onSubmitCallback: async (data) => {
      console.log(signUpSchema.safeParse(data));
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data);
      // throw new Error("Account already exists");
    },
  });
  const { handleSubmit, errors, isSubmitting } = methods;

  return (
    <div className="signup-container w-[100vw] h-[100vh] flex items-center justify-center">
      <div className="signup-screen">
        <img src={axiaLogo} alt="AXIA logo" className="w-[74px] mx-auto mb-3" />

        <FormInfo
          heading="Create your account"
          note="Start listing or sourcing scrap materials in minutes."
        />
        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit}
            className=" w-[500px] flex flex-col gap-y-4"
          >
            <FormInput
              name="fullName"
              label="Full Name"
              placeholder="Enter your full name"
              iconClass1="fa-solid fa-user"
            />
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
            <AltAccount message="Already have an acount?" method="Log in" />
            <FormError error={errors.root} />
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
