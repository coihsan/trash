import { dataprojects } from "../../constants/personaldata";
export default function IndexOfProjets() {
  return (
    <section>
      <h1>Hello</h1>
      <ul>
        {dataprojects.map((projects) => (
          <li>{projects.image}</li>
        ))}
      </ul>
    </section>
  );
}
