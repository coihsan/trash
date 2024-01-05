interface dataProps {
  key: number;
  projectname: string;
  image: string;
  urlPreview: string;
  urlDownload: string;
  tech?: string[];
}
export const dataprojects: dataProps = [
  {
    key: 0,
    projectname: "ZincStudio - Template Landing Page",
    image: "#",
    urlPreview: "https://zinc-starter.vercel.app/",
    urlDownload:
      "https://github.com/coihsan/zinc-starters-rgkhtp/archive/refs/heads/main.zip",
    tech: ["NextJS", "Tailwind CSS"],
  },
];
