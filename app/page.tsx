import Image from "next/image";
import styles from "../app/styles/page.module.css";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
    </main>
  );
}
