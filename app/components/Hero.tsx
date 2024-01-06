import { iconsUI } from "../constants/Icons.jsx";
import { personaldata } from "../constants/personal";
import ButtonCopy from "../UI/ButtonCopy";
import ButtonLink from "../UI/ButtonLink";
import Image from "next/image";
const Hero = () => {
  const personal = personaldata[0];
  return (
    <section className="mx-auto w-full grid py-12">
      <div className="flex items-center pb-9 max-sm:flex-col gap-6">
        <Image
          className="rounded-[20%]"
          src={"/ihsan.webp"}
          width={160}
          height={160}
          alt="ihsan"
        />
        <h1 className="text-7xl max-sm:text-6xl font-bold">˗ˏˋIhsanˎˊ</h1>
      </div>
      <div className="flex flex-wrap gap-2">
        <ButtonLink
          link={"#"}
          variant={
            "bg-lime-400 dark:bg-lime-600 border-lime-500 dark:border-lime-500 dark:fill-white"
          }
          text={"Whatsapp"}
          icon={iconsUI.whatsapp}
        />
        <ButtonCopy />
        <ButtonLink
          link={"#"}
          variant={
            "bg-gray-300 dark:bg-gray-600 border-gray-400/40 dark:border-gray-500 dark:fill-white"
          }
          text={"Resume"}
          icon={iconsUI.link}
        />
      </div>
      <div className="mt-[2rem] relative px-8 rounded-lg border bg-coral-100 dark:bg-coral-950 border-coral-400 dark:border-coral-600 shadow-md">
        <code className="absolute top-0 left-0 p-2 rounded-t-lg text-sky-500 w-full border-b-[1px] border-coral-400 dark:border-coral-600 pl-8 text-[14px]">
          about_me.md
        </code>
        <p className="pt-[4rem] text-[18px] dark:text-coral-400">
          {personal.about}
        </p>
        <div className="flex items-center gap-2 py-5 max-sm:flex-col max-sm:items-start">
          <h3>Google Credentials</h3>
          <div className="flex items-center gap-2 flex-wrap">
            <div className="w-12 h-12">{iconsUI.skillshop}</div>
            <a
              href=""
              className="px-4 py-1 hover:bg-zinc-200 hover:dark:bg-zinc-800 rounded-full hover:underline"
            >
              Skillshop
            </a>
            <a
              href=""
              className="px-4 py-1 hover:bg-zinc-200 hover:dark:bg-zinc-800 hover:underline rounded-full"
            >
              Accredible.net
            </a>
          </div>
        </div>
        <div className="my-[2rem]">
        <div className="flex itemx-center flex-wrap gap-2">
          {personal.passion.map((skill) => (
            <div
              key={skill.key}
              className="flex items-center gap-1 px-3 py-1 shadow-md rounded-full border border-zinc-400 dark:border-coral-600"
            >
              <span className="dark:fill-zinc-100">{skill.icon}</span>
              <p className="font-medium max-sm:text-sm">{skill.skilled}</p>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};
export default Hero;
