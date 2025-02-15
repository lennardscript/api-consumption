import React from "react";

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchBarComponent({ value, onChange }: Props) {
  return (
    <>
      <div className="flex justify-center my-4">
        <input
          className="w-full max-w-md p-2 border rounded shadow-sm focus:outline-none focus:border-blue-500"
          type="text"
          value={value}
          onChange={onChange}
          placeholder="Buscar por nombre..."
        />
      </div>
    </>
  )
}

