import { iconsUI } from "../constants/Icons.jsx";
import { personaldata } from "../constants/personal";
import ButtonCopy from "../UI/ButtonCopy";
const Hero = () => {
  const personal = personaldata[0];
  return (
    <section className="mx-auto w-full grid py-12">
      <h1 className="text-7xl max-sm:text-6xl font-bold pb-9">˗ˏˋIhsan ˎˊ</h1>
      <ButtonCopy />
      <div className="py-13">
        <h3 className="text-2xl pb-5">Role</h3>
        <div className="flex itemx-center flex-wrap gap-3">
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
      <div className="my-13 relative px-8 rounded-lg border border-coral-400 dark:border-coral-600">
        <code className="absolute top-0 left-0 p-2 rounded-t-lg text-coral-500 text-sky-500 w-full border-b-[1px] border-coral-400 dark:border-coral-600 pl-8 text-[14px]">
          about_me.md
        </code>
        <p className="pt-[4rem] text-[18px]">{personal.about}</p>
        <div className="flex itemx-center gap-1 py-5">
          <span className="fill-coral-600">{iconsUI.map}</span>
          <p className="text-coral-600">Kota Tangerang</p>
        </div>
      </div>
    </section>
  );
};
export default Hero;
