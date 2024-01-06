import Image from "next/image";
import { iconsRepo, dataplatform } from "../constants/IconsRepo";

export default function Skills() {
  return (
    <section className="shadow-md bg-coral-100 dark:bg-coral-900 p-5 rounded-lg border border-coral-400 dark:border-coral-800">
      <h1 className="titleSection">Tech Stack</h1>
      <ul className="grid grid-cols-4 gap-8 max-sm:grid-cols-3">
        {iconsRepo.map((icons) => (
          <li
            key={icons.key}
            className="flex items-center flex-col gap-3 justify-center "
          >
            <div>{icons.icon}</div>
            <p className="text-[14px] text-coral-700 dark:text-coral-500 text-center leading-none">
              {icons.title}
            </p>
          </li>
        ))}
      </ul>
      <div className="pt-[3rem]">
        <h1 className="subtitleSection">More Tool{"'"}s</h1>
        <ul className="flex flex-wrap items-center gap-2">
          {dataplatform.map((listskills) => (
            <li
              key={listskills.key}
              className="flex items-center justify-center gap-2 px-5 py-1 rounded-full bg-coral-200 dark:bg-coral-900 border border-coral-400 dark:border-coral-800"
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
