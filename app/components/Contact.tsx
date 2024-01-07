import { socialicons } from "../constants/socialicons";
export default function Contact() {
  return (
    <div className="my-[5rem]">
      <h3 className="font-bold text-3xl max-sm:text-2xl">
        If my profile suits your objectives, i would welcome the chance to be a
        part of your team!
      </h3>
      <div className="flex items-center gap-2">
        {socialicons.map((social) => (
          <a
            key={social.id}
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg p-3 bg-slate-300 dark:bg-coral-800 hover:scale-[0.9] transition-all ease-linear dark:fill-coral-300"
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  );
}
