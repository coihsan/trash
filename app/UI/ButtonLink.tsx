"use client";
import Link from "next/link";
interface Props {
  link: string;
  variant: string;
  text: string;
  icon?: JSX.Element;
}
export default function ButtonUI({ link, variant, text, icon }: Props) {
  return (
    <Link
      className={`shadow-md shadow-zinc-300 dark:shadow-inherit flex items-center gap-2 cursor-pointer px-3 py-1.5 rounded-md border ${variant}`}
      href={link}
    >
      <span>{icon}</span>
      <span className="leading-none">{text}</span>
    </Link>
  );
}
