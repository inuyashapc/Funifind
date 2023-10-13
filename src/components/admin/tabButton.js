import React from "react";

export default function TabButton({ tab, id, title, setTab }) {
  return (
    <button
      className={`btn btn-warning mr-3 mb-2 ${tab !== id && "light"}`}
      onClick={() => setTab(id)}
    >
      {title}
    </button>
  );
}
