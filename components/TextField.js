import React from "react";

function TextField({ name, label, type = "text", className = "" }) {
  const formControlClassName = `bg-transparent border border-primary-gray-300 py-3 px-6 w-full ${className}`;
  return (
    <div className="mb-6">
      <label
        htmlFor={name}
        className="block mb-1 font-semibold text-lg font-sans"
      >
        {label}
      </label>
      {type === "text" && <input id={name} className={formControlClassName} />}
      {type === "textarea" && (
        <textarea id={name} className={formControlClassName} />
      )}
    </div>
  );
}

export default TextField;
