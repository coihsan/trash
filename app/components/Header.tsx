import DarkMode from "../UI/DarkMode";
import Image from "next/image";
export default function Header() {
  return (
    <header className="max-w-screen-md mx-auto bg-slate-200 dark:bg-zinc-800 px-6 dark:text-zinc-100 rounded-lg mt-5">
      <div className="w-full mx-auto flex items-center justify-between py-3">
        <div className="flex">
          <Image
            className="rounded-full"
            src={"/ihsan.webp"}
            width={40}
            height={40}
            alt="logo"
          />
          <span>˗ˏˋIhsanˎˊ</span>
        </div>
        <DarkMode />
      </div>
    </header>
  );
}
