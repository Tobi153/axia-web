import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = z.object({
  username: z.string().min(8),
  email: z.string().email(),
  password: z.string().min(8),
});

export function LoginScreen() {
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      username: "John Doe",
      email: "test@email.com",
    },
    resolver: zodResolver(loginSchema),
  });
  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data);
      throw new Error();
    } catch (error) {
      setError("root", { message: "This username is already taken" });
    } finally {
      reset();
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" w-[500px] flex flex-col gap-y-4"
    >
      <div className="username-group flex flex-col gap-2">
        <label id="username" className="self-start">
          Username
        </label>
        <input
          {...register("username")}
          type="text"
          name="username"
          id="username"
          className="border-1 border-gray-700 rounded-md px-3 py-1"
          placeholder="Username"
        />
        {errors.username && (
          <div className="text-red-700 border-1 border-red-800 bg-red-200 px-3 py-1 text-left">
            {errors.username.message}
          </div>
        )}
      </div>
      <div className="email-group flex flex-col gap-2">
        <label id="email" className="self-start">
          Email
        </label>
        <input
          {...register("email")}
          type="email"
          name="email"
          id="email"
          className="border-1 border-gray-700 rounded-md px-3 py-1"
          placeholder="Email"
        />
        {errors.email && (
          <div className="text-red-700 border-1 border-red-800 bg-red-200 px-3 py-1 text-left">
            {errors.email.message}
          </div>
        )}
      </div>
      <div className="password-group flex flex-col gap-2">
        <label id="password" className="self-start">
          Password
        </label>
        <input
          {...register("password")}
          type="text"
          name="password"
          id="password"
          className="border-1 border-gray-700 rounded-md px-3 py-1"
          placeholder="Password"
        />
        {errors.password && (
          <div className="text-red-700 border-1 border-red-800 bg-red-200 px-3 py-1 text-left">
            {errors.password.message}
          </div>
        )}
      </div>
      <button
        className="bg-blue-700 text-white text-center rounded-md px-3 py-2 w-full cursor-pointer hover:bg-blue-800 transition-all duration-300"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Loading..." : "Submit"}
      </button>

      {errors.root && (
        <div className="text-red-700 border-1 border-red-800 bg-red-200 px-3 py-1 text-left">
          {errors.root.message}
        </div>
      )}
    </form>
  );
}
