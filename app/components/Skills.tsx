import Image from "next/image";
import { iconsRepo, dataplatform } from "../constants/IconsRepo";

export default function Skills() {
  return (
    <section className="shadow-md bg-coral-100 dark:bg-zinc-900 p-5 rounded-lg border border-coral-400 dark:border-zinc-800">
      <h1 className="titleSection text-center">Tech Stack</h1>
      <ul className="grid grid-cols-4 gap-2 max-sm:grid-cols-3">
        {iconsRepo.map((icons) => (
          <li
            key={icons.key}
            className="flex items-center flex-col rounded-lg p-5 gap-3 justify-center border border-zinc-400 dark:border-zinc-500"
          >
            <div>{icons.icon}</div>
            <p className="text-[14px] text-zinc-700 dark:text-zinc-400 text-center leading-none">
              {icons.title}
            </p>
          </li>
        ))}
      </ul>
      <div className="pt-[3rem]">
        <h1 className="subtitleSection text-center">More Tool{"'"}s</h1>
        <ul className="flex flex-wrap items-center gap-2">
          {dataplatform.map((listskills) => (
            <li
              key={listskills.key}
              className="flex items-center justify-center gap-2 px-5 py-1 rounded-full bg-coral-200 dark:bg-zinc-900 border border-zinc-400 dark:border-zinc-500"
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
