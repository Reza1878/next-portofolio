/* eslint-disable @next/next/no-img-element */
import React from "react";

function ContactItem({ label, value, icon, className }) {
  {
    return (
      <div className={`flex items-start ${className}`}>
        <img src={icon} alt="icon" className="w-8" />
        <div className="ml-4">
          <p className="text-sm font-semibold mb-1">{label}</p>
          <p className="text-lg font-semibold">{value}</p>
        </div>
      </div>
    );
  }
}

export default ContactItem;
