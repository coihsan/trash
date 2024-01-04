import DarkMode from "../UI/DarkMode";
import styles from "../styles/header.module.css";
import Image from "next/image";
export default function Header() {
  return (
    <header>
      <div className={styles.header}>
        <span>coihsan</span>
        <DarkMode />
      </div>
    </header>
  );
}
