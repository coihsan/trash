import DarkMode from "../UI/DarkMode";
import styles from "../styles/header.module.css";
import Image from "next/image";
export default function Header() {
  return (
    <header className="fixed mx-auto">
      <div className="w-full">
        <span>coihsan</span>
        <DarkMode />
      </div>
    </header>
  );
}
