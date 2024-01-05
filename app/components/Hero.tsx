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
      <div className="flex gap-2">
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
            "bg-gray-400 dark:bg-gray-600 border-gray-500 dark:border-gray-500 dark:fill-white"
          }
          text={"Resume"}
          icon={iconsUI.link}
        />
      </div>
      <div className="mt-[2rem] relative px-8 rounded-lg border bg-sky-100 dark:bg-sky-950/30 border-sky-400 dark:border-sky-600">
        <code className="absolute top-0 left-0 p-2 rounded-t-lg text-sky-500 w-full border-b-[1px] border-sky-400 dark:border-sky-600 pl-8 text-[14px]">
          about_me.md
        </code>
        <p className="pt-[4rem] text-[18px] dark:text-coral-400">
          {personal.about}
        </p>
        <div className="flex itemx-center gap-1 py-5">
          <span className="fill-coral-500">{iconsUI.map}</span>
          <p className="text-coral-500">Kota Tangerang</p>
        </div>
      </div>
      <div className="my-[2rem]">
        <h3 className="titleSection">Role</h3>
        <div className="flex itemx-center flex-wrap gap-2">
          {personal.passion.map((skill) => (
            <div
              key={skill.key}
              className="flex items-center gap-1 px-3 py-1 rounded-full border border-coral-400 dark:border-coral-100"
            >
              <span className="dark:fill-coral-100">{skill.icon}</span>
              <p className="font-medium max-sm:text-sm">{skill.skilled}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Hero;
