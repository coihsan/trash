import DarkMode from "../UI/DarkMode";
import Image from "next/image";
export default function Header() {
  return (
    <header className="max-w-screen-md mx-auto bg-coral-200 dark:bg-coral-800/50 px-6 dark:text-coral-100 rounded-lg mt-5">
      <div className="w-full mx-auto flex items-center justify-between py-3">
        <span>˗ˏˋIhsanˎˊ</span>
        <DarkMode />
      </div>
    </header>
  );
}
