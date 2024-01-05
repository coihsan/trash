import { iconsUI } from "../constants/Icons.jsx";
const Hero = () => {
  return (
    <section className="mx-auto w-full flex flex-col py-12">
      <h1 className="text-6xl font-bold">˗ˏˋIhsan ˎˊ</h1>
      <div className="flex py-5 itemx-center flex-wrap gap-3">
        <div className="flex items-center gap-1 px-3 py-1 rounded-full border border-coral-400 dark:border-coral-100">
          <span className="dark:fill-coral-100">{iconsUI.globe}</span>
          <h4 className="font-medium">Digital Marketing</h4>
        </div>
        <div className="flex items-center gap-1 px-3 py-1 rounded-full border border-coral-400 dark:border-coral-100">
          <span className="dark:fill-coral-100">{iconsUI.layout}</span>
          <h4 className="font-medium">Frontend Developer</h4>
        </div>
      </div>
      <div className="flex py-5 itemx-center gap-1">
        <span className="dark:fill-coral-100">{iconsUI.map}</span>
        <p>Kota Tangerang - Karawaci</p>
      </div>
      <div className="relative px-8 rounded-lg border border-coral-400 dark:border-coral-600">
        <code className="absolute top-0 left-0 p-2 rounded-t-lg text-coral-500 dark:text-coral-400 w-full bg-coral-200 dark:bg-coral-700">
          aboutme.tsx
        </code>
        <p className="pt-[4rem] pb-5 ">
          I started my career in early 2016 as a marketing and design, over time
          I learned digital marketing and applied it in several companies. at
          the end of 2022 I also played a role for frontend developers.
        </p>
      </div>
    </section>
  );
};
export default Hero;
