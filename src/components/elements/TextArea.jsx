import React from "react";

const TextArea = ({ name, rule, error, register, placeholder }) => {
  return (
    <div className="mt-4">
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
      <textarea
        id={name}
        placeholder={placeholder}
        {...register(name, rule)}
        rows={4}
        cols={4}
        className="w-full px-2 py-3 mt-2 text-sm bg-transparent border rounded-md outline-none"
      />
    </div>
  );
};

export default TextArea;
