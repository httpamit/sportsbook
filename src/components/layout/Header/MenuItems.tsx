import React, { useState } from "react";

const items = [
  "Sport",
  "Live",
  "Casino",
  "Live Casino",
  "Virtual Games",
  "Promotion",
];

export default function MenuItems() {
  const [activeItem, setActiveItem] = useState("Sport");
  return (
    <>
      {items.map((item) => (
        <a
          key={item}
          href="#"
          onClick={() => setActiveItem(item)}
          className={`p-6 text-[14px] border-b-2 transition-all duration-300 ease-in-out
            ${
              activeItem === item
                ? "text-[#1BB96B] border-[#1BB96B]"
                : "text-gray-400 border-transparent hover:text-[#1BB96B] hover:border-[#1BB96B]"
            }`}
        >
          {item}
        </a>
      ))}
    </>
  );
}
