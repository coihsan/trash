import { iconsUI } from "../constants/Icons.jsx";
import { personaldata } from "../constants/personal";
const Hero = () => {
  const personal = personaldata[0];
  return (
    <section className="mx-auto w-full flex flex-col py-12">
      <h1 className="text-6xl font-bold pb-9">˗ˏˋIhsan ˎˊ</h1>
      <div className="flex py-5 itemx-center flex-wrap gap-3">
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
      <div className="flex py-5 itemx-center gap-1">
        <span className="dark:fill-coral-100">{iconsUI.map}</span>
        <p>Kota Tangerang</p>
      </div>
      <div className="relative px-8 rounded-lg border border-coral-400 dark:border-coral-600">
        <code className="absolute top-0 left-0 p-2 rounded-t-lg text-coral-500 dark:text-coral-400 w-full border-b-[1px] border-coral-400 dark:border-coral-600">
          aboutme.tsx
        </code>
        <p className="pt-[4rem] pb-5 ">{personal.about}</p>
      </div>
    </section>
  );
};
export default Hero;
