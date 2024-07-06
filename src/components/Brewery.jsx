import React from "react";

export default function Brewery({ name, type, address }) {
  return (
    <div className="border border-black rounded p-3">
      <div className="flex flex-row justify-between">
        <h3>{name}</h3>
        <span
          className={
            type === "micro"
              ? "bg-red-400 text-white p-1"
              : type === "large"
              ? "bg-green-400 text-white p-1"
              : type === "closed"
              ? "bg-black text-white p-1"
              : "bg-blue-400 text-white p-1"
          }
        >
          {type}
        </span>
      </div>
      <p>Address: {address}</p>
    </div>
  );
}
