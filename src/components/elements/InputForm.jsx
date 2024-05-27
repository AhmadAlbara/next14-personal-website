import React from "react";

const InputForm = ({ name, type, rule, error, register, placeholder }) => {
  return (
    <div className="w-full mb-4">
      <div className="flex items-center gap-2">
        <label htmlFor={name} className="text-sm primary md:text-base">
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </label>

        {error[name]?.type === "required" && (
          <p role="alert" className="text-xs text-red-500">
            *{name} is required
          </p>
        )}
      </div>

      <input
        id={name}
        type={type}
        placeholder={placeholder}
        {...register(name, rule)}
        className="w-full px-2 py-3 mt-2 text-sm bg-transparent rounded-md border__color secondary placeholder:text-sm placeholder:text-neutral-500 focus:outline-double focus:outline-neutral-500 md:text-base md:placeholder:text-base"
        autoComplete={name}
      />
    </div>
  );
};

export default InputForm;
