import React from "react";

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchBarComponent({ value, onChange }: Props) {
  return (
    <>
      <input
        className="w-full p-2 border rounded"
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Buscar por nombre..."
      />
    </>
  )
}

