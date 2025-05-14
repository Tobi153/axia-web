// import { useAuth } from "../hooks/useAuth";
// import { useLoginForm } from "../hooks/useForm";
// import { useNavigate } from "react-router-dom";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";

// export function LoginScreen() {
//   const { formState, control, handleSubmit } = useLoginForm();
//   const navigate = useNavigate();
//   const { isAuthenticated } = useAuth();

//   const onSubmit = async () => {
//     try {
//       await handleSubmit();
//       alert("Logged in successfully");
//       navigate("/dashboard");
//     } catch (error) {
//       console.log("Submission failed:", error);
//     }
//   };

//   if (isAuthenticated) {
//     return <div>You are logged in...Redirecting to dashboard</div>;
//   }

//   return (
//     <Form control={control}>
//       <form onSubmit={onSubmit}>
//         <FormField
//           control={control}
//           name="username"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Username</FormLabel>
//               <FormControl>
//                 <Input placeholder="Enter your username" {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         <FormField
//           control={control}
//           name="email"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Email</FormLabel>
//               <FormControl>
//                 <Input placeholder="Enter your email" {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         <FormField
//           control={control}
//           name="password"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Password</FormLabel>
//               <FormControl>
//                 <Input
//                   type="password"
//                   placeholder="Enter your password"
//                   {...field}
//                 />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         {formState.errors.root?.serverError && (
//           <p className="text-red-500">
//             {formState.errors.root.serverError.message}
//           </p>
//         )}
//         <Button type="submit">Login</Button>
//       </form>
//     </Form>
//   );
// }

// export default LoginScreen;

import { useLoginForm } from "../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function LoginScreen() {
  const { control, handleSubmit, formState } = useLoginForm(); // Destructure correctly
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const onSubmit = async (data) => {
    try {
      await handleSubmit(data); // This should trigger validation and submission
      alert("Logged in successfully");
      navigate("/dashboard");
    } catch (error) {
      console.log("Submission failed:", error);
    }
  };

  if (isAuthenticated) {
    navigate("/dashboard", { replace: true }); // Redirect if authenticated
    return null; // Prevent further rendering
  }

  return (
    <Form {...{ control }}>
      {" "}
      {/* Spread control into Form props */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(onSubmit)();
        }}
      >
        <FormField
          control={control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Enter your username" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {formState.errors.root?.serverError && (
          <p className="text-red-500">
            {formState.errors.root.serverError.message}
          </p>
        )}
        <Button type="submit">Login</Button>
      </form>
    </Form>
  );
}

export default LoginScreen;
