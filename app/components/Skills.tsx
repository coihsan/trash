import Image from "next/image";
import { iconsRepo, dataplatform } from "../constants/IconsRepo";

export default function Skills() {
  return (
    <section>
      <h1 className="titleSection">Tech Stack</h1>
      <ul className="grid grid-cols-4 gap-2 max-sm:grid-cols-3">
        {iconsRepo.map((icons) => (
          <li
            key={icons.key}
            className="flex items-center flex-col gap-3 justify-center bg-coral-300 dark:bg-coral-900 p-5 rounded-lg border border-coral-400 dark:border-coral-800"
          >
            <div>{icons.icon}</div>
            <p className="text-[14px] text-coral-700 dark:text-coral-500 text-center leading-none">
              {icons.title}
            </p>
          </li>
        ))}
      </ul>
      <div className="pt-[2rem]">
        <h1 className="titleSection">Favorite Tool{"'"}s</h1>
        <ul className="flex flex-wrap items-center gap-2">
          {dataplatform.map((listskills) => (
            <li
              key={listskills.key}
              className="flex items-center justify-center gap-2 px-5 py-2 rounded-full bg-coral-200 dark:bg-coral-900 border border-coral-400 dark:border-coral-800"
            >
              <span>{listskills.icon}</span>
              <p>{listskills.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
