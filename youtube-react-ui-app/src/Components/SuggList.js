import React from "react";

const SuggList = ({ suggList }) => {
  return (
    <div className="absolute bg-white py-2 px-2 w-[525px] rounded-lg shadow-lg border border-gray-200">
      <ul className="mt-1">
        {suggList.map((item, i) => (
          <li key={i} className="shadow-sm hover:bg-gray-100 py-1 px-3">
            🔎 {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SuggList;
