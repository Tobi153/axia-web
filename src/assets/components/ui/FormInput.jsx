import { useFormContext } from "react-hook-form";
import { useState } from "react";
import { FormError } from "./FormError";
export function FormInput({
  name,
  type = "text",
  label,
  placeholder,
  iconClass1 = "",
  iconClass2 = "",
  iconClass3 = "",
}) {
  const { register, errors } = useFormContext();

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={`${name}-group flex flex-col`}>
      <label htmlFor={name} className="self-start">
        {label}
      </label>
      <div className="form-input relative">
        <button
          type="button"
          className="absolute left-5 top-[50%] translate-[-50%]"
        >
          <i className={`${iconClass1} text-[16px]`}></i>
        </button>
        <input
          {...register(name)}
          type={showPassword ? "text" : type}
          name={name}
          id={name}
          className="w-full border-1 border-gray-700 rounded-md pl-10 px-3 py-2 h-[44px] focus-within:outline-0 focus:border-none focus:ring-2 focus:ring-blue-500 transition-all duration-30"
          placeholder={placeholder}
        />
        <button
          type="button"
          className="absolute right-2 top-[50%] translate-[-50%] cursor-pointer"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          <i
            className={`${showPassword ? iconClass3 : iconClass2} text-[16px]`}
          ></i>
        </button>
      </div>
      {errors[name] && <FormError error={errors[name]} />}
    </div>
  );
}
