import { dataprojects } from "../constants/projectsdata";
import Image from "next/image";
export default function Projects() {
  return (
    <section className="mt-12">
      <h1 className="titleSection">Code for Fun</h1>
      <ul className="grid grid-cols-2 gap-2 max-sm:grid-cols-1">
        {dataprojects.map((index) => (
          <li
            key={index.key}
            className="p-3 shadow-md rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-400 dark:border-zinc-800"
          >
            <Image
              className="w-full object-fit rounded-lg"
              src={index.image}
              width={300}
              height={300}
              alt={"dasd"}
            />
            <div className="mt-3">
              <h3>{index.projectname}</h3>
              <ul className="flex flex-wrap gap-2 mt-3">
                {index.tech.map((items) => (
                  <li className="px-3 py-1 text-zinc-700 dark:text-zinc-400 rounded-md bg-zinc-200 dark:bg-zinc-800 text-sm">
                    {items}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
