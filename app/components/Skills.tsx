import Image from "next/image";
import { iconsRepo } from "../constants/IconsRepo";

export default function Skills() {
  return (
    <section>
      <h1>Tech Stack</h1>
      <ul>
        {iconsRepo.map((icons) => (
          <li>{icons.icon}</li>
        ))}
      </ul>
      <h1>Favorite Tool's</h1>
    </section>
  );
}
