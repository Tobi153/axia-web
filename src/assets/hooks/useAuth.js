import { useContext } from "react";
import AuthContext from "../context/AppContext";
import { loginUser, logoutUser } from "../services/api/data";

export const useAuth = () => {
  const { user, login, logout } = useContext(AuthContext);

  const handleLogin = async (credentials) => {
    const userData = await loginUser(credentials);
    login(userData);
    return userData;
  };

  const handleLogout = async () => {
    await logoutUser();
    logout();
  };

  return {
    user,
    login: handleLogin,
    logout: handleLogout,
    isAuthenticated: !!user,
  };
};

// import { useFormContext } from "react-hook-form";
// import { useState } from "react";

// export function FormInput({
//   name,
//   type = "text",
//   label,
//   placeholder,
//   iconClass1 = "",
//   iconClass2 = "",
// }) {
//   const {
//     register,
//     formState: { errors },
//   } = useFormContext();

//   const [showPassword, setShowPassword] = useState(false);
//   return (
//     <div className={`${name}-group flex flex-col`}>
//       <label htmlFor={name} className="self-start">
//         {label}
//       </label>
//       <div className="form-input flex items-center gap-2 border-1 border-gray-700 rounded-md px-3 py-2 h-[44px] focus:outline-none ring-1 ring-gray-500">
//         <i class={iconClass1}></i>
//         <input
//           {...register(name)}
//           type={showPassword ? "password" : type}
//           name={name}
//           id={name}
//           className="rounded-md border-0 outline-0 w-full"
//           placeholder={placeholder}
//         />
//         <i
//           class={iconClass2}
//           onClick={() => setShowPassword((prev) => !prev)}
//         ></i>
//       </div>
//       {errors[name] && (
//         <div className="text-red-700 text-left text-md">
//           {errors[name].message}
//         </div>
//       )}
//     </div>
//   );
// }
