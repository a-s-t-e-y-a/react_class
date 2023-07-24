import React, { useState } from "react";

function Input({ textProperty,onchnage }) {
  return (
    <>
      <div className="w-full">
        <label className="text-white text-md py-2">{textProperty}</label>
        <input
          className="flex h-10 w-full rounded-md border border-black/30 bg-white px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder={textProperty}
          onChange={onchnage}
        />
      </div>
    </>
  );
}

export default Input;
