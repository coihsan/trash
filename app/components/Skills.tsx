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
            className="flex items-center flex-col justify-center bg-coral-200 dark:bg-coral-900 p-5 rounded-lg"
          >
            <span>{icons.icon}</span>
            <span>{icons.title}</span>
          </li>
        ))}
      </ul>
      <h1>Favorite Tool's</h1>
    </section>
  );
}
