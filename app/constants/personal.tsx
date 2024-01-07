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
}[] = [
  {
    key: 0,
    about:
      "I can handle jobs such as Digital Marketing, Graphic Design, and also as a Frontend Developer in marketing with a team or individually.",
    passion: [
      {
        key: 0,
        icon: iconsUI.globe,
        skilled: "SEM",
      },
      {
        key: 1,
        icon: iconsUI.palette,
        skilled: "Graphic Design",
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
