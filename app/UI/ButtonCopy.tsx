"use client";
import { iconsUI } from "../constants/Icons";
import { useEffect, useState } from "react";

export default function ButtonCopy() {
  const [isCopied, setIsCopied] = useState(false);

  const copyEmail = "co.ihsan@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(copyEmail).then(() => {
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 1000);
    });
  };
  return (
    <button
      type="button"
      onClick={handleCopy}
      style={{ color: isCopied ? "#a3a3a3" : "#171717" }}
      className="w-max shadow-md shadow-zinc-300 dark:shadow-inherit flex px-3 py-1.5 rounded-md bg-zinc-100 hover:bg-zinc-200 items-center gap-2 cursor-pointer border border-zinc-300 dark:border-white"
    >
      {iconsUI.copy}
      <span>{isCopied ? "Copied" : "E-Mail"}</span>
    </button>
  );
}
