import { iconsUI } from "../constants/Icons";

export const personaldata: {
  key: number;
  about: string;
  passion: {
    key: number;
    icon: JSX.Element;
    skilled: string;
  }[];
  location: {
    key: number;
    icon: JSX.Element;
    skilled: string;
  }[];
  contact: {
    key: number;
    icon: JSX.Element;
    skilled: string;
  }[];
}[] = [
  {
    key: 0,
    about:
      "I started my career in early 2016 as a marketing and design, over time I learned digital marketing and applied it in several companies. at the end of 2022 I also played a role for frontend developers.",
    passion: [
      {
        key: 0,
        icon: iconsUI.globe,
        skilled: "SEM",
      },
      {
        key: 1,
        icon: iconsUI.palette,
        skilled: "Design",
      },
      {
        key: 2,
        icon: iconsUI.layout,
        skilled: "Frontend Developer",
      },
      {
        key: 3,
        icon: iconsUI.search,
        skilled: "SEO",
      },
    ],
    location: [
      {
        key: 2,
        icon: iconsUI.map,
        skilled: "Kota Tangerang - Karawaci",
      },
    ],
  },
];
