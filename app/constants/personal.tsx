import { iconsUI } from "../constants/Icons";

export const personal: {
  about: string;
  passion: {
    icon: JSX.Element;
    skilled: string;
  }[];
  location: {
    icon: JSX.Element;
    skilled: string;
  }[];
  contact: {
    icon: JSX.Element;
    skilled: string;
  }[];
}[] = [
  {
    about:
      "I started my career in early 2016 as a marketing and design, over time I learned digital marketing and applied it in several companies. at the end of 2022 I also played a role for frontend developers.",
    passion: [
      {
        icon: iconsUI.globe,
        skilled: "Digital Marketing",
      },
      {
        icon: iconsUI.layout,
        skilled: "Frontend Developer",
      },
    ],
    location: [
      {
        icon: iconsUI.map,
        skilled: "Kota Tangerang - Karawaci",
      },
    ],
  },
];
