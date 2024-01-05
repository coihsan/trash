import Image from "next/image";
import { iconsRepo } from "../constants/IconsRepo";

export default function Skills() {
  return (
    <section>
      <h1 className="titleSection">Tech Stack</h1>
      <ul className="grid grid-cols-4 gap-2 max-sm:grid-cols-3">
        {iconsRepo.map((icons) => (
          <li
            key={icons.key}
            className="flex items-center flex-col gap-3 justify-center bg-coral-200 dark:bg-coral-900 p-5 rounded-lg border dark:border-coral-800"
          >
            <div className="p-3 rounded-lg dark:bg-coral-800 flex items-center justify-center">
              <div>{icons.icon}</div>
            </div>
            <p className="text-[14px] text-coral-700 dark:text-coral-500 text-center leading-none">
              {icons.title}
            </p>
          </li>
        ))}
      </ul>
      <h1>Favorite Tool's</h1>
    </section>
  );
}
