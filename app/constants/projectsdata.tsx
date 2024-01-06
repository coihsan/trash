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
    image: "/Zinc-Design.webp",
    urlPreview: "https://zinc-starter.vercel.app/",
    urlDownload:
      "https://github.com/coihsan/zinc-starters-rgkhtp/archive/refs/heads/main.zip",
    tech: ["NextJS", "Tailwind CSS"],
  },
  {
    key: 1,
    projectname: "berrynet starter template",
    image: "/berrynet-Internet-Provider.webp",
    urlPreview: "https://berrynet-starter.vercel.app/",
    urlDownload:
      "https://github.com/coihsan/berrynet-starters-rgkhtp/archive/refs/heads/main.zip",
    tech: ["NextJS", "Tailwind CSS"],
  },
  {
    key: 2,
    projectname: "Jhon Doe Portofolio + Blog Page",
    image: "/jhondoe-hero.webp",
    urlPreview: "https://macksmith-template.stackblitz.io/",
    urlDownload:
      "https://github.com/coihsan/berrynet-starters-rgkhtp/archive/refs/heads/main.zip",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    key: 3,
    projectname: "Mack Smith - Portofolio Web Page",
    image: "/Mack-Smith-Resume-2023.webp",
    urlPreview: "https://macksmith-template.stackblitz.io/",
    urlDownload:
      "https://github.com/coihsan/berrynet-starters-rgkhtp/archive/refs/heads/main.zip",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    key: 4,
    projectname: "Karsa Mahasura - Resume Web Page",
    image: "/Karsa Mahasura - Digital Marketing.webp",
    urlPreview: "https://coihsan.github.io/karsa-mahasura-template/",
    urlDownload:
      "https://github.com/coihsan/karsa-mahasura-template/archive/refs/heads/main.zip",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    key: 5,
    projectname: "Bhadrika Cipta - Resume Web Page",
    image: "/Bhadrika Cipta.webp",
    urlPreview: "https://coihsan.github.io/bhadrika-cipta-template/",
    urlDownload:
      "https://github.com/coihsan/bhadrika-cipta-template/archive/refs/heads/main.zip",
    tech: ["Vite.js", "Tailwin CSS"],
  },
];
