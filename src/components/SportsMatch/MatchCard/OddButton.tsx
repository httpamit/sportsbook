import React from "react";

type Props = {
  label: string;
  value: number;
};

export default function OddButton({ label, value }: Props) {
  const baseStyles =
    "flex-1 py-2 px-3 bg-[#1f1a2e] rounded text-white flex justify-between items-center transition-all duration-300 ease-in-out";
  return (
    <button className={`${baseStyles}`}>
      <span className="text-gray-400">{label}</span>
      <span>{value}</span>
    </button>
  );
}
