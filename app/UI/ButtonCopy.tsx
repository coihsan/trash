"use client";
import { iconsUI } from "../constants/Icons";
import { useEffect, useState } from "react";

export default function ButtonCopy{(textButton, textCopy)} {
    const [isCopied, setIsCopied ] = useState(false);
    const copyEmail = "co.ihsan@gmail.com";

    const handleCopy = () => {
        navigator.clipboard.writeText(copyEmail).then(() =>{
            setIsCopied(true);
            setTimeout(() => {
                setIsCopied(false)
            }, 1000);
        })
    };
  return (<button onClick={handleCopy} style={{ color: isCopied ? "#a3a3a3" : "#171717"}} >E-Mail</button>);
}
